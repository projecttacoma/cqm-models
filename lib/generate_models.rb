# TODO: May need to add Entity casting to Any if entities need to be handled
# TODO: HQMF OIDS - Specifically RelatedPerson

# ! /usr/bin/env ruby
require 'nokogiri'
require 'active_support/all'
require 'rails/generators'
require 'erb'
require 'json'
require_relative './generators/custom_mongo/model_generator'
require_relative './generator_helpers'

###############################################################################
# Helpers
###############################################################################

# Lookups for modelinfo 'element types' to Ruby+Mongoid types.
TYPE_LOOKUP_RB = {
  'System.DateTime': 'DateTime',
  'System.Date': 'Date',
  'System.Integer': 'Integer',
  'System.Quantity': 'Quantity',
  'System.Code': 'Code',
  'QDM.Identifier': 'Identifier',
  'System.Any': 'Any',
  'interval<System.DateTime>': 'Interval',
  'interval<System.Quantity>': 'Interval',
  'list<QDM.Component>': 'Array',
  'System.String': 'String',
  'list<QDM.Id>': 'Array',
  'list<QDM.ResultComponent>': 'Array',
  'list<QDM.FacilityLocation>': 'Array',
  'list<QDM.DiagnosisComponent>': 'Array',
  'list<System.String>': 'Array',
  'list<System.Code>': 'Array',
  'System.Decimal': 'Float',
  'System.Time': 'Time',
  'System.Concept': 'Any'
}.stringify_keys!

# Lookups for modelinfo 'element types' to JavaScript+Mongoose types.
TYPE_LOOKUP_JS = {
  'System.DateTime': 'DateTime',
  'System.Date': 'QDMDate',
  'System.Integer': 'Number',
  'System.Quantity': 'Quantity',
  'System.Code': 'Code',
  'System.Any': 'Any',
  'QDM.Identifier': 'IdentifierSchema',
  'interval<System.DateTime>': 'Interval',
  'interval<System.Quantity>': 'Interval',
  'list<QDM.Component>': '[]',
  'System.String': 'String',
  'list<QDM.Id>': '[]',
  'list<QDM.ResultComponent>': '[]',
  'list<QDM.FacilityLocation>': '[]',
  'list<QDM.DiagnosisComponent>': '[]',
  'list<System.String>': '[]',
  'list<System.Code>': '[Code]',
  'System.Decimal': 'Number',
  'System.Time': 'DateTime',
  'System.Concept': '{}'
}.stringify_keys!

RESERVED_WORDS = {
  'class': 'clazz'
}.stringify_keys!

###############################################################################
# Start of modelinfo file parsing
###############################################################################

puts 'Parsing modelinfo file...'

Dir.chdir ENV['GITHUB_WORKSPACE'] if ENV['CI']
puts Dir.pwd
puts Dir.entries('.')

# Open specified modelinfo file
modelinfo_file = ARGV[0]
raise 'Please provide a valid modelinfo file path and name.' if modelinfo_file.blank? || !File.file?(modelinfo_file)

modelinfo = File.open(modelinfo_file) { |f| Nokogiri::XML(f) }

# Open specified HQMF oid file
oids_file = ARGV[1]
raise 'Please provide a valid HQMF oid file path and name.' if oids_file.blank? || !File.file?(oids_file)

oids = JSON.parse(File.read(oids_file))

# If this script was run with a third parameter of 'TEST', then generate the models in a
# not standard location. This helps with testing.
IS_TEST = (ARGV[2] == 'TEST')

# Grab QDM version as defined in the modelinfo file
qdm_version = modelinfo.xpath('//ns4:modelInfo').first.attributes['version'].value

# Datatypes (keys are the datatype name, values are the datatype attributes)
datatypes = {}

# We will export a hqmfOid to datatype map
hqmfOid_to_datatype_map = {}

# Loop through each typeInfo node (each of these is a QDM datatype)
modelinfo.xpath('//ns4:typeInfo').each do |type|
  # Grab the name of this QDM datatype
  datatype_name = type.attributes['name'].value.split('.').last
  # Reject irrelevant datatypes
  next if datatype_name.include?('Negative') || datatype_name.include?('Positive') || datatype_name.include?('QDMBaseType')

  # Grab the QDM attributes for this datatype
  attributes = []
  type.xpath('./ns4:element').each do |attribute|
    # Grab the name of this QDM datatype attribute
    attribute_name = attribute.attributes['name'].value

    # Grab the type of this QDM datatype attribute
    attribute_type = if attribute.attributes['type']
                       attribute.attributes['type'].value
                     else
                       'System.Any'
                     end

    next if attribute_name.blank? || attribute_type.blank?

    # Store name and type
    attributes << { name: attribute_name, type: attribute_type }
  end

  # Add the label as qdmTitle
  qdm_title = type['label']
  if qdm_title.nil? # If there's no label, check if there is a "positive" profile
    positive_profile = modelinfo.at_xpath("/ns4:modelInfo/ns4:typeInfo[@xsi:type='ns4:ProfileInfo'][@identifier='Positive#{datatype_name}']")
    qdm_title = positive_profile['label'] unless positive_profile.nil?
  end
  attributes << { name: 'qdmTitle', type: 'System.String', default: qdm_title } unless qdm_title.nil?

  # Add the extra info that is manually maintained in the "oids" file
  extra_info = oids[datatype_name.underscore]
  if extra_info.present?
    attributes << { name: 'hqmfOid', type: 'System.String', default: extra_info['hqmf_oid'] } if extra_info['hqmf_oid'].present?
    attributes << { name: 'qrdaOid', type: 'System.String', default: extra_info['qrda_oid'] } if extra_info['qrda_oid'].present?
    attributes << { name: 'qdmCategory', type: 'System.String', default: extra_info['qdm_category'] } if extra_info['qdm_category'].present?
    attributes << { name: 'qdmStatus', type: 'System.String', default: extra_info['qdm_status'] } if extra_info['qdm_status'].present?
    hqmfOid_to_datatype_map[extra_info['hqmf_oid']] = datatype_name if extra_info['hqmf_oid'].present?
  end

  # Add the qdmVersion attribute unless the base type is one that will provide it
  attributes << { name: 'qdmVersion', type: 'System.String', default: qdm_version } unless ['QDM.Entity', 'QDM.Component'].include? type['baseType']

  datatypes[datatype_name] = { attributes: attributes }
end

###############################################################################
# Start of model generation
###############################################################################

puts 'Generating Ruby models...'

# Do a quick sanity check on attribute types
datatypes.each do |datatype, info|
  info[:attributes].each do |attribute|
    raise 'Unsupported type from modelinfo file for Ruby types: ' + attribute[:type] + 'from: ' + datatype if TYPE_LOOKUP_RB[attribute[:type]].blank?
    raise 'Unsupported type from modelinfo file for JavaScript types: ' + attribute[:type] + 'from: ' + datatype if TYPE_LOOKUP_JS[attribute[:type]].blank?
  end
end

# Create Ruby models
base_module = 'QDM::'
base_module = 'Test::QDM::' if IS_TEST
datatypes.each do |datatype, info|
  name = base_module + datatype
  attributes = info[:attributes].map do |attribute|
    attribute = attribute.dup
    attribute[:type] = TYPE_LOOKUP_RB[attribute[:type]]
    attribute
  end
  generator_args = [name, attributes]
  Rails::Generators.invoke('custom_mongo:model', generator_args)
end

# Create require file (if not in test mode)
unless IS_TEST
  model_template = File.read('templates/models_template.rb.erb')
  renderer = ERB.new(model_template, nil, '-')
  file_path = 'app/models/models.rb'
  File.open(file_path, 'w') { |file| file.puts renderer.result(binding) }
end

# Javascript PatientSchema for was renamed to QDMPatient since it just contains the QDM data
if datatypes['Patient']
  datatypes['QDMPatient'] = datatypes['Patient']
  datatypes.delete('Patient')
end

puts 'Generating JavaScript models...'

# Create JavaScript models
template = File.read('templates/mongoose_template.js.erb')
default_renderer = ERB.new(template, nil, '-')
file_path = 'app/assets/javascripts/'
file_path = 'tmp/' if IS_TEST
datatype_custom_templates = {
  QDMPatient: 'templates/patient_template.js.erb',
  Identifier: 'templates/identifier_template.js.erb'
}

datatypes.each do |datatype, info|
  renderer = default_renderer
  if datatype_custom_templates.key?(datatype.to_sym)
    puts "using custom template for #{datatype}"
    renderer = ERB.new(File.read(datatype_custom_templates[datatype.to_sym]), nil, '-')
  end
  attrs_with_extras = info[:attributes] # this field gets used in the template
  # QDMPatients don't need _type
  unless datatype.to_s == 'QDMPatient'
    attrs_with_extras << { name: '_type', type: 'System.String', default: "QDM::#{datatype.underscore.camelize}" } # Add Class
  end
  puts '  ' + file_path + datatype + '.js'
  File.open(file_path + datatype + '.js', 'w') { |file| file.puts renderer.result(binding) }
end

# Create require file (if not in test mode)
unless IS_TEST
  indtemplate = File.read('templates/index_template.js.erb')
  renderer = ERB.new(indtemplate, nil, '-')
  file_path = 'app/assets/javascripts/index.js'
  puts '  ' + file_path
  File.open(file_path, 'w') { |file| file.puts renderer.result(binding) }

  alltemplate = File.read('templates/all_data_elements_template.js.erb')
  renderer = ERB.new(alltemplate, nil, '-')
  file_path = 'app/assets/javascripts/AllDataElements.js'
  puts '  ' + file_path
  File.open(file_path, 'w') { |file| file.puts renderer.result(binding) }
  contents = File.read(file_path)
  contents.gsub!(%r{\/FacilityLocation.js}, '/attributes/FacilityLocation.js')
  contents.gsub!(%r{\/Component.js}, '/attributes/Component.js')
  contents.gsub!(%r{\/CarePartner.js}, '/attributes/CarePartner.js')
  contents.gsub!(%r{\/DiagnosisComponent.js}, '/attributes/DiagnosisComponent.js')
  contents.gsub!(%r{\/Entity.js}, '/attributes/Entity.js')
  contents.gsub!(%r{\/Organization.js}, '/attributes/Organization.js')
  contents.gsub!(%r{\/PatientEntity.js}, '/attributes/PatientEntity.js')
  contents.gsub!(%r{\/Practitioner.js}, '/attributes/Practitioner.js')
  contents.gsub!(%r{\/ResultComponent.js}, '/attributes/ResultComponent.js')
  contents.gsub!(%r{\/Identifier.js}, '/attributes/Identifier.js')
  contents.gsub!(%r{\/Location.js}, '/attributes/Location.js')
  File.open(file_path, 'w') { |file| file.puts contents }
end

###############################################################################
# Model post processing
###############################################################################

puts 'Post processing...'

# Ruby post processing
ruby_models_path = 'app/models/qdm/'
ruby_models_path = 'app/models/test/qdm/' if IS_TEST
Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  contents = File.read(file_name)

  # Cut out the 'Any' type placeholder (these attributes could point to anything).
  contents.gsub!(/, type: Any/, '')

  # Add default to [] for facilityLocations
  contents.gsub!(/field :facilityLocations, type: Array/, 'field :facilityLocations, type: Array, default: []')

  # Make facilityLocation of type QDM::FacilityLocation
  contents.gsub!(/field :facilityLocation, type: Code/, 'field :facilityLocation, type: QDM::FacilityLocation')

  # Make Entity subclasses of type QDM::Entity
  contents.gsub!(/field :participant/, "embeds_many :participant, class_name: 'QDM::Entity'")
  contents.gsub!(/field :sender/, "embeds_many :sender, class_name: 'QDM::Entity'")
  contents.gsub!(/field :recipient/, "embeds_many :recipient, class_name: 'QDM::Entity'")
  contents.gsub!(/field :recorder/, "embeds_many :recorder, class_name: 'QDM::Entity'")
  contents.gsub!(/field :performer/, "embeds_many :performer, class_name: 'QDM::Entity'")
  contents.gsub!(/field :requester/, "embeds_many :requester, class_name: 'QDM::Entity'")
  contents.gsub!(/field :prescriber/, "embeds_many :prescriber, class_name: 'QDM::Entity'")
  contents.gsub!(/field :dispenser/, "embeds_many :dispenser, class_name: 'QDM::Entity'")
  contents.gsub!(/field :identifier, type: Identifier/, "embeds_one :identifier, class_name: 'QDM::Identifier'")

  # EncounterPerformed
  contents.gsub!(/field :class/, 'field :clazz')

  File.open(file_name, 'w') { |file| file.puts contents }
end

# JavaScript post processing
js_models_path = 'app/assets/javascripts/'
js_models_path = 'tmp/' if IS_TEST
Dir.glob(js_models_path + '*.js').each do |file_name|
  contents = File.read(file_name)

  # Replace 'Any' type placeholder (these attributes could point to anything).
  contents.gsub!(/: Any/, ': Any')

  # Component, Facility, Diagnoses
  contents.gsub!(/facilityLocations: \[\]/, 'facilityLocations: [FacilityLocationSchema]')
  contents.gsub!(/facilityLocation: Code/, 'facilityLocation: FacilityLocationSchema')
  contents.gsub!(/components: \[\]/, 'components: [ComponentSchema]')
  contents.gsub!(/component: Code/, 'component: ComponentSchema')
  contents.gsub!(/diagnoses: \[\]/, 'diagnoses: [DiagnosisComponentSchema]')
  contents.gsub!(/sender: Any/, 'sender: [AnyEntity]')
  contents.gsub!(/recipient: Any/, 'recipient: [AnyEntity]')
  contents.gsub!(/participant: Any/, 'participant: [AnyEntity]')
  contents.gsub!(/recorder: Any/, 'recorder: [AnyEntity]')
  contents.gsub!(/performer: Any/, 'performer: [AnyEntity]')
  contents.gsub!(/requester: Any/, 'requester: [AnyEntity]')
  contents.gsub!(/prescriber: Any/, 'prescriber: [AnyEntity]')
  contents.gsub!(/dispenser: Any/, 'dispenser: [AnyEntity]')
  contents.gsub!(/relatedTo: \[\]/, 'relatedTo: [String]')

  File.open(file_name, 'w') { |file| file.puts contents }
end

# Inject Ruby Patient model extensions
GeneratorHelpers.inject_extension('templates/patient_extension.rb.erb', ruby_models_path + 'patient.rb')
# Inject Ruby Entity model extensions
GeneratorHelpers.inject_extension('templates/entity_extension.rb.erb', ruby_models_path + 'entity.rb') if datatypes['Entity']

# Make sure Ruby models are in the correct module
ruby_models_path = 'app/models/qdm/'
ruby_models_path = 'app/models/test/qdm/' if IS_TEST
Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  contents = File.read(file_name)
  contents.gsub!('Qdm', 'QDM')
  contents.gsub!('Code', 'QDM::Code')
  contents.gsub!('Date\n', 'QDM::Date\n') # \n so DateTime does not get overwritten
  contents.gsub!(' Identifier', ' QDM::Identifier')
  contents.gsub!('Interval', 'QDM::Interval')
  contents.gsub!('Quantity', 'QDM::Quantity')
  File.open(file_name, 'w') { |file| file.puts contents }
end

types_not_inherited_by_data_element = ['/patient.rb', '/identifier.rb', '/component.rb', '/facility_location.rb', '/entity.rb', '/organization.rb', '/patient_entity.rb', '/practitioner.rb', '/care_partner.rb', '/location.rb', '/diagnosis_component.rb', '/result_component.rb']
types_inherited_by_attribute = ['/component', '/facility_location', '/entity', '/diagnosis_component', '/identifier']
types_inherited_by_entity = ['/patient_entity', '/care_partner', '/practitioner', '/organization', '/location']
types_inherited_by_component = ['/result_component']

# Set embedded in for datatypes
Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  contents = File.read(file_name)
  if ['entity.rb', 'organization.rb', 'patient_entity.rb', 'practitioner.rb', 'care_partner.rb', 'location.rb'].any? { |sub_string| sub_string.include?(File.basename(file_name)) }
    contents.gsub!(/  include Mongoid::Document\n/, "  include Mongoid::Document\n  embedded_in :data_element\n")
    File.open(file_name, 'w') { |file| file.puts contents }
  end
  # TODO: Might be able to make this list by finding baseType="System.Any" in model info file instead of hard-coding.
  next if types_not_inherited_by_data_element.any? { |sub_string| sub_string.include?(File.basename(file_name)) }

  contents.gsub!(/  include Mongoid::Document\n/, "  include Mongoid::Document\n  embedded_in :patient\n")
  File.open(file_name, 'w') { |file| file.puts contents }
end

# Make sure Ruby datatypes models have the correct inheritance
Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  contents = ''
  File.open(file_name).each_line.with_index do |line, index|
    line.gsub!("\n", " < DataElement\n") if index.zero? && types_not_inherited_by_data_element.none? { |sub_string| file_name.include?(sub_string) }
    line.gsub!("\n", " < Attribute\n") if index.zero? && types_inherited_by_attribute.any? { |sub_string| file_name.include?(sub_string) }
    line.gsub!("\n", " < Entity\n") if index.zero? && types_inherited_by_entity.any? { |sub_string| file_name.include?(sub_string) }
    line.gsub!("\n", " < Component\n") if index.zero? && types_inherited_by_component.any? { |sub_string| file_name.include?(sub_string) }
    contents += "module QDM\n  # #{file_name}\n  #{line.gsub('QDM::', '')}" if index.zero?
    contents += '  ' unless index.zero? || line.blank?
    contents += line unless index.zero?
  end
  contents += 'end'
  File.open(file_name, 'w') { |file| file.puts contents }
end

puts 'Moving Attribute Schemas To Their Own Directory'
# Create ruby attributes directory if it doesn't exist, directory won't exist in test mode
if IS_TEST
  Dir.mkdir(ruby_models_path + 'attributes')
  Dir.mkdir(js_models_path + 'attributes')
end

attribute_list = types_inherited_by_attribute + types_inherited_by_component + types_inherited_by_entity
existing_types_moving_to_attributes = attribute_list.select { |sub_string| File.exist?(ruby_models_path + sub_string + '.rb') }
existing_types_moving_to_attributes.each do |type|
  modified_name = type[1..-1]
  File.rename ruby_models_path + modified_name + '.rb', ruby_models_path + 'attributes/' + modified_name + '.rb'
  File.rename js_models_path + modified_name.camelize + '.js', js_models_path + 'attributes/' + modified_name.camelize + '.js'
end

puts 'Create hqmfOid to datatype map as json file'
f = File.open('app/models/hqmfOid_to_datatype_map.json', 'w')
f.write(JSON.pretty_generate(hqmfOid_to_datatype_map))
f.close

puts 'Done.'
