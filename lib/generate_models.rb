#! /usr/bin/env ruby
require 'nokogiri'
require 'active_support/all'
require 'rails/generators'
require 'erb'
require 'json'
require_relative './generators/custom_mongo/model_generator'

###############################################################################
# Helpers
###############################################################################

# Lookups for modelinfo 'element types' to Ruby+Mongoid types.
TYPE_LOOKUP_RB = {
  'System.DateTime': 'DateTime',
  'System.Integer': 'Integer',
  'System.Quantity': 'Quantity',
  'System.Code': 'Code',
  'QDM.Id': 'Id',
  'System.Any': 'Any',
  'interval<System.DateTime>': 'Interval',
  'interval<System.Quantity>': 'Interval',
  'list<QDM.Component>': 'Array',
  'System.String': 'String',
  'list<QDM.Id>': 'Array',
  'list<QDM.ResultComponent>': 'Array',
  'list<QDM.FacilityLocation>': 'Array',
  'list<System.Code>': 'Array',
  'System.Decimal': 'Float',
  'System.Time': 'Time',
  'System.Concept': 'Any'
}.stringify_keys!

# Lookups for modelinfo 'element types' to JavaScript+Mongoose types.
TYPE_LOOKUP_JS = {
  'System.DateTime': 'DateTime',
  'System.Integer': 'Number',
  'System.Quantity': 'Quantity',
  'System.Code': 'Code',
  'System.Any': 'Any',
  'QDM.Id': 'IdSchema',
  'interval<System.DateTime>': 'Interval',
  'interval<System.Quantity>': 'Interval',
  'list<QDM.Component>': '[]',
  'System.String': 'String',
  'list<QDM.Id>': '[]',
  'list<QDM.ResultComponent>': '[]',
  'list<QDM.FacilityLocation>': '[]',
  'list<System.Code>': '[Code]',
  'System.Decimal': 'Number',
  'System.Time': 'DateTime',
  'System.Concept': '{}'
}.stringify_keys!

###############################################################################
# Start of modelinfo file parsing
###############################################################################

puts 'Parsing modelinfo file...'

Dir.chdir ENV['TRAVIS_BUILD_DIR'] if ENV['CI']
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

  attributes << { name: 'qdmVersion', type: 'System.String', default: qdm_version }

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
  Id: 'templates/id_template.js.erb'
}

datatypes.each do |datatype, info|
  renderer = default_renderer
  if datatype_custom_templates.key?(datatype.to_sym)
    puts "using custom template for #{datatype}"
    renderer = ERB.new(File.read(datatype_custom_templates[datatype.to_sym]), nil, '-')
  end
  attrs_with_extras = info[:attributes] # this field gets used in the template
  # Custom datatypes don't need _type
  unless datatype_custom_templates.key?(datatype.to_sym)
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

  # Make relatedTo embeds_many instead of field
  contents.gsub!(/  field :relatedTo, type: Array\n/, "  embeds_many :relatedTo, class_name: 'QDM::Id'\n")

  # Make prescriberId embeds_many instead of field
  contents.gsub!(/  field :prescriberId, type: Id\n/, "  embeds_one :prescriberId, class_name: 'QDM::Id'\n")

  # Make dispenserId embeds_many instead of field
  contents.gsub!(/  field :dispenserId, type: Id\n/, "  embeds_one :dispenserId, class_name: 'QDM::Id'\n")

  File.open(file_name, 'w') { |file| file.puts contents }
end

# JavaScript post processing
js_models_path = 'app/assets/javascripts/'
js_models_path = 'tmp/' if IS_TEST
files = Dir.glob(js_models_path + '*.js').each do |file_name|
  contents = File.read(file_name)

  # Replace 'Any' type placeholder (these attributes could point to anything).
  contents.gsub!(/: Any/, ': Any')

  # Component, Facility, and Id types
  contents.gsub!(/facilityLocations: \[\]/, 'facilityLocations: [FacilityLocationSchema]')
  contents.gsub!(/facilityLocation: Code/, 'facilityLocation: FacilityLocationSchema')
  contents.gsub!(/components: \[\]/, 'components: [ComponentSchema]')
  contents.gsub!(/component: Code/, 'component: ComponentSchema')
  contents.gsub!(/relatedTo: \[\]/, 'relatedTo: [IdSchema]')

  File.open(file_name, 'w') { |file| file.puts contents }
end

# Inject Ruby Patient model extensions
template = File.read('templates/patient_extension.rb.erb')
renderer = ERB.new(template, nil, '-')
rb_patient = File.read(ruby_models_path + 'patient.rb')
rb_patient.gsub!(/end/, renderer.result(binding))
File.open(ruby_models_path + 'patient.rb', 'w') { |file| file.write(rb_patient) }

# Make sure Ruby models are in the correct module
ruby_models_path = 'app/models/qdm/'
ruby_models_path = 'app/models/test/qdm/' if IS_TEST
Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  contents = File.read(file_name)
  contents.gsub!('Qdm', 'QDM')
  contents.gsub!('Code', 'QDM::Code')
  contents.gsub!(' Id', ' QDM::Id')
  contents.gsub!('Interval', 'QDM::Interval')
  contents.gsub!('Quantity', 'QDM::Quantity')
  File.open(file_name, 'w') { |file| file.puts contents }
end

# Set embedded in for datatypes
Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  contents = File.read(file_name)
  # TODO: Might be able to make this list by finding baseType="System.Any" in model info file instead of hard-coding.
  if File.basename(file_name) == 'id.rb'
    contents.gsub!(/  include Mongoid::Document\n/, "  include Mongoid::Document\n  embedded_in :data_element\n")
  else
    not_embedded_in_patient_files = ['patient.rb', 'component.rb', 'facility_location.rb']
    next if not_embedded_in_patient_files.include?(File.basename(file_name))
    contents.gsub!(/  include Mongoid::Document\n/, "  include Mongoid::Document\n  embedded_in :patient\n")
  end
  File.open(file_name, 'w') { |file| file.puts contents }
end

# Make sure Ruby datatypes models have the correct inheritance
Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  contents = ''
  File.open(file_name).each_line.with_index do |line, index|
    line.gsub!("\n", " < DataElement\n") if index.zero? && !file_name.include?('/patient.rb') && !file_name.include?('/id.rb') && !file_name.include?('/component.rb') && !file_name.include?('/facility_location.rb')
    line.gsub!("\n", " < Attribute\n") if index.zero? && (file_name.include?('/component.rb') || file_name.include?('/facility_location.rb'))
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
if File.exist?(ruby_models_path + 'facility_location.rb')
  File.rename ruby_models_path + 'facility_location.rb', ruby_models_path + 'attributes/facility_location.rb'
  File.rename js_models_path + 'FacilityLocation.js', js_models_path + 'attributes/FacilityLocation.js'
end
if File.exist?(ruby_models_path + 'component.rb')
  File.rename ruby_models_path + 'component.rb', ruby_models_path + 'attributes/component.rb'
  File.rename js_models_path + 'Component.js', js_models_path + 'attributes/Component.js'
end

puts 'Create hqmfOid to datatype map as json file'
f = File.open('app/models/hqmfOid_to_datatype_map.json', 'w')
f.write(JSON.pretty_generate(hqmfOid_to_datatype_map))
f.close

puts 'Done.'
