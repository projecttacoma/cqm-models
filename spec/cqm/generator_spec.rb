require 'spec_helper'

RSpec.describe QDM do

  # Given a modelinfo path, this helper method will return a hash,
  # where each key is one of the datatypes defined in the modelinfo
  # file, and its value is an array of attribute names. This is useful
  # when making sure each datatype has its own model, and each model has
  # each attribute.
  def get_datatypes_attributes(modelinfo_file)
    modelinfo = File.open(modelinfo_file) { |f| Nokogiri::XML(f) }
    datatypes = {}
    # Loop through each typeInfo node (each of these is a QDM datatype)
    modelinfo.xpath("//ns4:typeInfo").each do |type|
      # Grab the name of this QDM datatype
      datatype_name = type.attributes['name'].value.split('.').last
      # Grab the QDM attributes for this datatype
      attributes = []
      type.xpath("./ns4:element").each do |attribute|
        # Grab the name of this QDM datatype attribute
        attributes << attribute&.attributes['name']&.value
      end
      # Store datatype and its attributes (reject irrelevant datatypes)
      unless datatype_name.include?('Negative') ||
            datatype_name.include?('Positive') ||
            datatype_name.include?('QDMBaseType')
        datatypes[datatype_name] = attributes
      end
    end
    return datatypes
  end

  # Given a modelinfo file and an HQMF OID mapping file, check that the
  # generator constructs all of the necessary models for each datatype,
  # and that each datatype model has all of the proper attributes. By
  # abstracting this check, we can reuse this method for multiple versions
  # of QDM modelinfo files.
  def check_generator_datatypes_attributes(modelinfo_file, hqmf_oid_file)
    expect(system "ruby lib/generate_models.rb #{modelinfo_file} #{hqmf_oid_file} TEST").to be true
    datatypes = get_datatypes_attributes(modelinfo_file)
    datatypes.each do |datatype, attributes|
      expect(File.file?('app/models/test/qdm/' + datatype.underscore + '.rb')).to be true
      ruby_contents = File.read('app/models/test/qdm/' + datatype.underscore + '.rb')
      js_contents = File.read('tmp/' + datatype + '.js')
      attributes.each do |attribute|
        expect(ruby_contents.include?(attribute.underscore)).to be true
        expect(js_contents.include?(attribute.underscore)).to be true
      end
    end
  end

  before(:all) do
    # Clear old test models (if they are still there for some reason)
    system 'rm tmp/*.js'
    system 'rm -rf app/models/test'
  end

  after(:each) do
    # Clear just generated test models
    system 'rm tmp/*.js'
    system 'rm -rf app/models/test'
  end

  it 'generates each QDM 5.3 datatype model with all attributes' do
    check_generator_datatypes_attributes('modelinfo/qdm-modelinfo-5.3.xml', 'data/oids.json')
  end

  it 'generates each QDM 5.0.2 datatype model with all attributes' do
    check_generator_datatypes_attributes('modelinfo/qdm-modelinfo-5.0.2.xml', 'data/oids.json')
  end

  it 'generates each QDM 5.0.1 datatype model with all attributes' do
    check_generator_datatypes_attributes('modelinfo/qdm-modelinfo-5.0.1.xml', 'data/oids.json')
  end

  it 'generates each QDM 5.0 datatype model with all attributes' do
    check_generator_datatypes_attributes('modelinfo/qdm-modelinfo-5.0.xml', 'data/oids.json')
  end

  it 'generates each QDM 4.3 datatype model with all attributes' do
    check_generator_datatypes_attributes('modelinfo/qdm-modelinfo-4.3.xml', 'data/oids.json')
  end

  it 'generates each QDM 4.2 datatype model with all attributes' do
    check_generator_datatypes_attributes('modelinfo/qdm-modelinfo-4.2.xml', 'data/oids.json')
  end

end
