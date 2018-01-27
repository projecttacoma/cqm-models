#! /usr/bin/env ruby

require 'nokogiri'
require 'active_support/all'
require 'rails/generators'
require 'erb'

###############################################################################
# Helpers
###############################################################################

# Lookups for modelinfo 'element types' to Ruby/Mongo/Custom types.
# See: https://mongoid.github.io/old/en/mongoid/docs/documents.html#fields
MODELINFO_RUBY_LOOKUP = {
  'System.DateTime': 'DateTime',
  'System.Integer': 'Integer',
  'System.Quantity': 'Quantity',
  'System.Code': 'Code',
  'System.Any': 'Any',
  'interval<System.DateTime>': 'Interval',
  'interval<System.Quantity>': 'Interval',
  'list<QDM.Component>': 'Array'
}.stringify_keys!

# Lookups for modelinfo 'element types' to Mongoose types.
# See: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
MODELINFO_JS_LOOKUP = {
  'System.DateTime': 'Date',
  'System.Integer': 'Number',
  'System.Quantity': 'Quantity',
  'System.Code': 'Code',
  'System.Any': 'Schema.Types.Mixed',
  'interval<System.DateTime>': 'Interval',
  'interval<System.Quantity>': 'Interval',
  'list<QDM.Component>': '[]'
}.stringify_keys!


###############################################################################
# Start of modelinfo file parsing
###############################################################################

puts 'Parsing modelinfo file...'

# Open specified modelinfo file
modelinfo_file = ARGV[0]
raise 'Please provide a valid modelinfo file path and name.' if modelinfo_file.blank? || !File.file?(modelinfo_file)
modelinfo = File.open(modelinfo_file) { |f| Nokogiri::XML(f) }

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
    attribute_name = attribute.attributes['name'].value

    # Grab the type of this QDM datatype attribute
    attribute_type = attribute.attributes['type'].value

    # Store name and type
    attributes << { name: attribute_name, type: attribute_type }
  end

  # Store datatype and its attributes (skip negation datatypes)
  unless datatype_name.include?('Negative') || datatype_name.include?('Positive')
    datatypes[datatype_name] = attributes
  end
end

###############################################################################
# Start of model generation
###############################################################################

puts 'Generating Ruby models...'

# Create Ruby models
datatypes.each do |datatype, attributes|
  Rails::Generators.invoke('mongoid:model', [datatype] + attributes.collect { |attribute| attribute[:name] + ':' + MODELINFO_RUBY_LOOKUP[attribute[:type]] })
end

puts 'Generating JavaScript models...'

# Create JavaScript models
template = File.read('templates/mongoose_template.js.erb')
renderer = ERB.new(template)
datatypes.each do |datatype, attributes|
  puts '  app/assets/javascripts/' + datatype + '.js'
  File.open('app/assets/javascripts/' + datatype + '.js', 'w') { |file| file.puts renderer.result(binding) }
end


###############################################################################
# Model post processing
###############################################################################

puts 'Post processing...'

# Cut out the 'Any' type placeholder (these attributes could point to anything).
files = Dir.glob('app/models/*.rb').each do |file_name|
  contents = File.read(file_name)
  new_contents = contents.gsub(/, type: Any/, '')
  File.open(file_name, "w") { |file| file.puts new_contents }
end

puts 'Done.'
