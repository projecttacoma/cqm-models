require('nokogiri')
require_relative '../app/models/models'
require('generate_types')

module QDM
  # PatientGeneration module can be used to generate patients with dataElements that are populated
  # with every possible attribute that said type supports
  module PatientGeneration
    # Generates patient(s) with fully-loaded dataElements if new_patient_for_each_type is false then a
    # single patient will be returned that has every data element on it
    def self.generate_exhastive_data_element_patients(new_patient_for_each_type = true)
      datatypes = get_datatypes(File.join(File.dirname(__FILE__), '../modelinfo/qdm-modelinfo-5.4.xml'))
      patients = []
      cqm_patient = nil
      qdm_patient = nil
      datatypes.each do |type|
        next if type.include? 'PatientCharacteristic'
        # 1 Patient Per data element type containing negated and non-negated type (if negatable)
        if cqm_patient.nil? || qdm_patient.nil? || new_patient_for_each_type
          cqm_patient = QDM::BaseTypeGeneration.generate_cqm_patient(type)
          qdm_patient = QDM::BaseTypeGeneration.generate_qdm_patient
          # Add patient characteristics
          sex = generate_loaded_datatype('QDM::PatientCharacteristicSex')
          race = generate_loaded_datatype('QDM::PatientCharacteristicRace')
          ethnicity = generate_loaded_datatype('QDM::PatientCharacteristicEthnicity')
          birthdate = generate_loaded_datatype('QDM::PatientCharacteristicBirthdate')
          qdm_patient.dataElements.push(sex)
          qdm_patient.dataElements.push(race)
          qdm_patient.dataElements.push(ethnicity)
          qdm_patient.dataElements.push(birthdate)
          cqm_patient.qdmPatient = qdm_patient
        end

        data_element = generate_loaded_datatype(type)
        qdm_patient.dataElements.push(data_element)
        # if type is negatable, add a negated version to the patient
        if data_element.fields.keys.include? 'negationRationale'
          negated_data_element = generate_loaded_datatype(type, true)
          qdm_patient.dataElements.push(negated_data_element)
        end
        patients.push(cqm_patient)
      end
      patients
    end

    def self.get_datatypes(modelinfo_file)
      modelinfo = File.open(modelinfo_file) { |f| Nokogiri::XML(f) }
      datatypes = []
      # Loop through each typeInfo node (each of these is a QDM datatype)
      modelinfo.xpath('//ns4:typeInfo').each do |type|
        # Grab the name of this QDM datatype
        datatype_name = type.attributes['name'].value.split('.').last
        exclusion_array = %w[Component Id Patient ResultComponent FacilityLocation]
        # Store datatype and its attributes (reject irrelevant datatypes)
        next if datatype_name.include?('Negative') || datatype_name.include?('Positive') ||
                datatype_name.include?('QDMBaseType') || (exclusion_array.include? datatype_name)
        datatypes.push(datatype_name)
      end
      datatypes
    end

    def self.generate_loaded_datatype(data_element_type, negate_data_element = false)
      data_element = QDM.const_get(data_element_type).new
      fields = data_element.typed_attributes.keys
      fields.each do |field_name|
        # Ignore these fields, they are used by mongo
        next if %w[_id _type].include? field_name
        if !data_element[field_name] || data_element[field_name] == []
          populate_fields(field_name, data_element, negate_data_element)
        end
      end
      data_element
    end

    def self.populate_fields(field_name, data_element, negate_data_element)
      # There are certain fields that we want to populate manually
      if field_name == 'description'
        # Skip the setting of patient description for now
      elsif field_name == 'negationRationale'
        data_element[field_name] = QDM::BaseTypeGeneration.generate_code_field if negate_data_element
      elsif field_name == 'components'
        data_element[field_name] = [QDM::BaseTypeGeneration.generate_component]
      elsif field_name == 'result'
        # TODO: Result can be MANY Integer, Decimal, Code, Quantity or Ratio randomize this
        data_element[field_name] = QDM::BaseTypeGeneration.generate_code_field
      elsif field_name == 'diagnoses'
        # TODO: Randomize count and contents of diagnosis
        data_element[field_name] = [QDM::Diagnosis.new]
      elsif field_name == 'dataElementCodes'
        # TODO: Populate dataElementCodes with codes specifically for data element type
        data_element[field_name] = [QDM::BaseTypeGeneration.generate_code_field]
      elsif field_name == 'facilityLocations'
        # TODO: Randomize number of facility locations added
        data_element[field_name] = [QDM::BaseTypeGeneration.generate_facility_location]
      elsif field_name == 'facilityLocation'
        # TODO: Randomize number of facility locations added
        data_element[field_name] = QDM::BaseTypeGeneration.generate_facility_location
      elsif field_name == 'targetOutcome'
        # TODO: Randomize type of targetOutcome, use code for now
        data_element[field_name] = QDM::BaseTypeGeneration.generate_code_field
      else
        # Fallback to populating fields by expected type
        populate_field_by_type(field_name, data_element)
      end
    end

    def self.populate_field_by_type(field_name, data_element)
      field_type = data_element.fields[field_name].type
      if field_type == QDM::Code
        data_element[field_name] = QDM::BaseTypeGeneration.generate_code_field
      elsif field_type == DateTime
        data_element[field_name] = QDM::BaseTypeGeneration.generate_datetime
      elsif field_type == QDM::Interval
        data_element[field_name] = QDM::BaseTypeGeneration.generate_date_interval_field
      elsif field_type == QDM::Quantity
        data_element[field_name] = QDM::BaseTypeGeneration.generate_quantity
      elsif field_type == QDM::Id
        # TODO: randomize value
        data_element[field_name] = QDM::Id.new
      elsif field_type == Integer
        # TODO: randomize value
        data_element[field_name] = 3
      else
        puts("Unknown Type in patient generator for field #{field_name}, type #{field_type} in #{data_element._type}")
      end
    end
  end
end
