#! /usr/bin/env ruby

require 'nokogiri'
require 'active_support/all'
require 'rails/generators'
require 'erb'
require 'json'

###############################################################################
# Helpers
###############################################################################

# Lookups for modelinfo 'element types' to Ruby/Mongo/Custom types.
TYPE_LOOKUP = {
  'System.DateTime': 'DateTime',
  'System.Integer': 'Integer',
  'System.Quantity': 'Quantity',
  'System.Code': 'Code',
  'System.Any': 'Any',
  'interval<System.DateTime>': 'Interval',
  'interval<System.Quantity>': 'Interval',
  'list<QDM.Component>': 'Array',
  'System.String': 'String',
  'list<QDM.Id>': 'Array',
  'list<QDM.ResultComponent>': 'Array',
  'list<QDM.FacilityLocation>': 'Array',
  'list<System.Code>': 'Array',
  'QDM.Id': 'String',
  'System.Decimal': 'Float',
  'System.Time': 'Time',
  'System.Concept': 'Any'
}.stringify_keys!


###############################################################################
# Start of modelinfo file parsing
###############################################################################

puts 'Parsing modelinfo file...'

Dir.chdir ENV['TRAVIS_BUILD_DIR'] if ENV['CI']
puts Dir.pwd
puts Dir.entries(".")

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
qdm_version = modelinfo.xpath("//ns4:modelInfo").first.attributes['version'].value

# Datatypes (keys are the datatype name, values are the datatype attributes)
datatypes = {}

# Loop through each typeInfo node (each of these is a QDM datatype)
modelinfo.xpath("//ns4:typeInfo").each do |type|
  # Grab the name of this QDM datatype
  datatype_name = type.attributes['name'].value.split('.').last

  # Grab the QDM attributes for this datatype
  attributes = []
  type.xpath("./ns4:element").each do |attribute|
    # Grab the name of this QDM datatype attribute
    attribute_name = attribute&.attributes['name']&.value

    # Grab the type of this QDM datatype attribute
    if attribute&.attributes['type']
      attribute_type = attribute&.attributes['type']&.value
    else
      attribute_type = 'System.Any'
    end

    next if attribute_name.blank? || attribute_type.blank?

    # Store name and type
    attributes << { name: attribute_name, type: attribute_type }
  end

  # Store datatype and its attributes (reject irrelevant datatypes)
  unless datatype_name.include?('Negative') ||
         datatype_name.include?('Positive') ||
         datatype_name.include?('QDMBaseType')
    datatypes[datatype_name] = attributes
  end
end


###############################################################################
# Start of model generation
###############################################################################

puts 'Generating Ruby models...'

# Do a quick sanity check on attribute types
datatypes.each do |datatype, attributes|
  attributes.each do |attribute|
    raise 'Unsupported type from modelinfo file: ' + attribute[:type] if TYPE_LOOKUP[attribute[:type]].blank?
  end
end

# Create Ruby models
extra_fields_rb = [
  'hqmf_oid:String',
  'qrda_oid:String',
  'category:String',
  'status:String',
  'qdm_version:String'
]
base_module = 'QDM::'
base_module = 'Test::QDM::' if IS_TEST
datatypes.each do |datatype, attributes|
  Rails::Generators.invoke('mongoid:model', [base_module + datatype] + attributes.collect { |attribute| attribute[:name].underscore + ':' + TYPE_LOOKUP[attribute[:type]] } + extra_fields_rb)
end

# Create require file (if not in test mode)
unless IS_TEST
  require_file = File.new('app/models/models.rb', 'w')
  require_file.puts 'module QDM'
  require_file.puts 'end'
  require_file.puts "require 'mongoid'"
  require_file.puts "require_relative 'qdm/basetypes/code'"
  require_file.puts "require_relative 'qdm/basetypes/interval'"
  require_file.puts "require_relative 'qdm/basetypes/quantity'"
  require_file.puts "require_relative 'qdm/basetypes/data_element'"
  datatypes.each do |datatype, attributes|
    require_file.puts "require_relative 'qdm/#{datatype.underscore}'"
  end
  require_file.close
end

puts 'Generating JavaScript models...'

# Create JavaScript models
template = File.read('templates/mongoose_template.js.erb')
renderer = ERB.new(template, nil, '-')
file_path = 'app/assets/javascripts/'
file_path = 'tmp/' if IS_TEST
extra_fields_js = [
  { name: 'hqmf_oid', type: 'System.String' },
  { name: 'qrda_oid', type: 'System.String' },
  { name: 'category', type: 'System.String' },
  { name: 'status', type: 'System.String' },
  { name: 'qdm_version', type: 'System.String' }
]
datatypes.each do |datatype, attributes|
  attrs_with_extras = attributes + extra_fields_js
  puts '  ' + file_path + datatype + '.js'
  File.open(file_path + datatype + '.js', 'w') { |file| file.puts renderer.result(binding) }
end

# Create require file (if not in test mode)
unless IS_TEST
  index_file = File.open('app/assets/javascripts/index.js', 'w')
  index_file.puts "module.exports.Result = require('./Result.js');"
  datatypes.each do |datatype, attributes|
    index_file.puts "module.exports.#{datatype} = require('./#{datatype}.js');"
  end
  index_file.close
end

###############################################################################
# Model post processing
###############################################################################

puts 'Post processing...'

# Ruby post processing
ruby_models_path = 'app/models/qdm/'
ruby_models_path = 'app/models/test/qdm/' if IS_TEST
files = Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  contents = File.read(file_name)

  # Cut out the 'Any' type placeholder (these attributes could point to anything).
  contents.gsub!(/, type: Any/, '')

  # Add QDM version
  contents.gsub!(/field :qdm_version, type: String/, "field :qdm_version, type: String, default: '#{qdm_version}'")

  # Add HQMF oid (if it exists in the given HQMF oid mapping file)
  dc_name = File.basename(file_name, '.*')
  unless oids[dc_name].blank? || oids[dc_name]['hqmf_oid'].blank?
    contents.gsub!(/  field :hqmf_oid, type: String\n/, "  field :hqmf_oid, type: String, default: '#{oids[dc_name]['hqmf_oid']}'\n")
  else
    contents.gsub!(/  field :hqmf_oid, type: String\n/, '') # Don't include this field
  end

  # Add QRDA oid (if it exists in the given QRDA oid mapping file)
  unless oids[dc_name].blank? || oids[dc_name]['qrda_oid'].blank?
    contents.gsub!(/  field :qrda_oid, type: String\n/, "  field :qrda_oid, type: String, default: '#{oids[dc_name]['qrda_oid']}'\n")
  else
    contents.gsub!(/  field :qrda_oid, type: String\n/, '') # Don't include this field
  end

  # Add category
  unless oids[dc_name].blank? || oids[dc_name]['category'].blank?
    contents.gsub!(/  field :category, type: String\n/, "  field :category, type: String, default: '#{oids[dc_name]['category']}'\n")
  else
    contents.gsub!(/  field :category, type: String\n/, '') # Don't include this field
  end

  # Add status
  unless oids[dc_name].blank? || oids[dc_name]['status'].blank?
    contents.gsub!(/  field :status, type: String\n/, "  field :status, type: String, default: '#{oids[dc_name]['status']}'\n")
  else
    contents.gsub!(/  field :status, type: String\n/, '') # Don't include this field
  end

  File.open(file_name, 'w') { |file| file.puts contents }
end

# JavaScript post processing
js_models_path = 'app/assets/javascripts/'
js_models_path = 'tmp/' if IS_TEST
files = Dir.glob(js_models_path + '*.js').each do |file_name|
  contents = File.read(file_name)

  # Replace 'Any' type placeholder (these attributes could point to anything).
  contents.gsub!(/: Any/, ': {}')

  # Add QDM version
  contents.gsub!(/qdm_version: String/, "qdm_version: { type: String, default: \"#{qdm_version}\" }")

  # Add HQMF oid (if it exists in the given HQMF oid mapping file)
  dc_name = File.basename(file_name.underscore, '.*')
  unless oids[dc_name].blank? || oids[dc_name]['hqmf_oid'].blank?
    contents.gsub!(/  hqmf_oid: String,\n/, "  hqmf_oid: { type: String, default: \"#{oids[dc_name]['hqmf_oid']}\" },\n")
  else
    contents.gsub!(/  hqmf_oid: String,\n/, '') # Don't include this field
  end

  # Add QRDA oid (if it exists in the given QRDA oid mapping file)
  unless oids[dc_name].blank? || oids[dc_name]['qrda_oid'].blank?
    contents.gsub!(/  qrda_oid: String,\n/, "  qrda_oid: { type: String, default: \"#{oids[dc_name]['qrda_oid']}\" },\n")
  else
    contents.gsub!(/  qrda_oid: String,\n/, '') # Don't include this field
  end

  # Add category
  unless oids[dc_name].blank? || oids[dc_name]['category'].blank?
    contents.gsub!(/  category: String,\n/, "  category: { type: String, default: \"#{oids[dc_name]['category']}\" },\n")
  else
    contents.gsub!(/  category: String,\n/, '') # Don't include this field
  end

  # Add status
  unless oids[dc_name].blank? || oids[dc_name]['status'].blank?
    contents.gsub!(/  status: String,\n/, "  status: { type: String, default: \"#{oids[dc_name]['status']}\" },\n")
  else
    contents.gsub!(/  status: String,\n/, '') # Don't include this field
  end

  File.open(file_name, 'w') { |file| file.puts contents }
end

# Inject Ruby Patient model extensions
template = File.read('templates/patient_extension.rb.erb')
renderer = ERB.new(template, nil, '-')
rb_patient = File.read(ruby_models_path + 'patient.rb')
rb_patient.gsub!(/end/, renderer.result(binding) + "end\n")
File.open(ruby_models_path + 'patient.rb', 'w') { |file| file.write(rb_patient) }

# Inject JavaScript Patient model extensions
template = File.read('templates/patient_extension.js.erb')
renderer = ERB.new(template, nil, '-')
rb_patient = File.read(js_models_path + 'Patient.js')
rb_patient.gsub!(/\n\}\)\;/, ",\n" + renderer.result(binding))
File.open(js_models_path + 'Patient.js', 'w') { |file| file.write(rb_patient) }

# Make sure Ruby models are in the correct module
ruby_models_path = 'app/models/qdm/'
ruby_models_path = 'app/models/test/qdm/' if IS_TEST
files = Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  contents = File.read(file_name)
  contents.gsub!('Qdm', 'QDM')
  contents.gsub!('Code', 'QDM::Code')
  contents.gsub!('Interval', 'QDM::Interval')
  contents.gsub!('Quantity', 'QDM::Quantity')
  File.open(file_name, 'w') { |file| file.puts contents }
end

# Set embedded in for datatypes
files = Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  contents = File.read(file_name)
  next if File.basename(file_name) == 'patient.rb'
  contents.gsub!(/  include Mongoid::Document\n/, "  include Mongoid::Document\n  embedded_in :patient\n")
  File.open(file_name, 'w') { |file| file.puts contents }
end

# Make sure Ruby datatypes models have the correct inheritance
files = Dir.glob(ruby_models_path + '*.rb').each do |file_name|
  next if File.basename(file_name) == 'patient.rb'
  contents = ''
  File.open(file_name).each_line.with_index do |line, index|
    contents += line
    contents.gsub!("\n", " < QDM::DataElement\n") if index == 0
  end
  File.open(file_name, 'w') { |file| file.puts contents }
end

puts 'Done.'
