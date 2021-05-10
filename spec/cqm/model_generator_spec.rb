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
    modelinfo.xpath('//ns4:typeInfo').each do |type|
      # Grab the name of this QDM datatype
      datatype_name = type.attributes['name'].value.split('.').last
      # Grab the QDM attributes for this datatype
      attributes = []
      type.xpath('./ns4:element').each do |attribute|
        # Grab the name of this QDM datatype attribute
        attributes << attribute.attributes['name'].value
      end
      # Store datatype and its attributes (reject irrelevant datatypes)
      next if datatype_name.include?('Negative') || datatype_name.include?('Positive') || datatype_name.include?('QDMBaseType')

      datatypes[datatype_name] = attributes
    end
    datatypes
  end

  # Given the contents of a Ruby model file, make sure it has the given attributes
  def ruby_model_has_attributes(ruby_contents, attributes)
    attributes.each do |attribute|
      expect(ruby_contents.include?(attribute)).to be true
    end
  end

  # Given the contents of a JS model file, make sure it has the given attributes
  def js_model_has_attributes(js_contents, attributes)
    attributes.each do |attribute|
      expect(js_contents.include?(attribute)).to be true
    end
  end

  # Given a modelinfo file and an HQMF OID mapping file, check that the
  # generator constructs all of the necessary models for each datatype,
  # and that each datatype model has all of the proper attributes. By
  # abstracting this check, we can reuse this method for multiple versions
  # of QDM modelinfo files.
  def check_generator_datatypes_attributes(modelinfo_file, hqmf_oid_file)
    expect(system("ruby lib/generate_models.rb #{modelinfo_file} #{hqmf_oid_file} TEST")).to be true
    datatypes = get_datatypes_attributes(modelinfo_file)
    datatypes.each do |datatype, attributes|
      if datatype != 'Identifier' && datatype != 'Component' && datatype != 'FacilityLocation' && datatype != 'Entity' && datatype != 'ResultComponent' && datatype != 'DiagnosisComponent' && datatype != 'CarePartner' && datatype != 'Organization' && datatype != 'PatientEntity' && datatype != 'Practitioner' && datatype != 'Location'
        puts datatype
        expect(File.file?('app/models/test/qdm/' + datatype.underscore + '.rb')).to be true
        ruby_model_has_attributes(File.read('app/models/test/qdm/' + datatype.underscore + '.rb'), attributes)
        # Javascript PatientSchema was renamed to QDMPatient since it just contains the QDM data
        datatype = 'QDMPatient' if datatype == 'Patient'
        js_model_has_attributes(File.read('tmp/' + datatype + '.js'), attributes)
      else
        expect(File.file?('app/models/test/qdm/attributes/' + datatype.underscore + '.rb')).to be true
        ruby_model_has_attributes(File.read('app/models/test/qdm/attributes/' + datatype.underscore + '.rb'), attributes)
        js_model_has_attributes(File.read('tmp/attributes/' + datatype + '.js'), attributes)
      end
    end
  end

  before(:all) do
    # Clear old test models (if they are still there for some reason)
    system 'rm -rf tmp/*'
    system 'rm -rf app/models/test'
  end

  after(:each) do
    # Clear just generated test models
    system 'rm -rf tmp/*'
    system 'rm -rf app/models/test'
  end

  it 'generates each QDM 5.6 datatype model with all attributes' do
    check_generator_datatypes_attributes('modelinfo/qdm-modelinfo-5.6.xml', 'data/oids_qdm_5.6.json')
  end
end
