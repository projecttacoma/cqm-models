require('nokogiri')
require_relative '../app/models/models'

module QDM
    module PatientGeneration
        def self.generate_exhastive_data_element_patients(patient_per_type = true)
            datatypes = get_datatypes(File.join(File.dirname(__FILE__), '../modelinfo/qdm-modelinfo-5.4.xml'))
            patients = []
            patient = nil

            datatypes.each do |type|
                if (!type.include? "PatientCharacteristic")
                    # 1 Patient Per data element type containing negated and non-negated type (if negatable)
                    if (patient == nil || patient_per_type)
                        patient = QDM::Patient.new()
                        patient.extendedData =  {}
                        patient.extendedData['medical_record_number'] = "1"
                        patient.familyName = "#{type} Test Patient"
                        # TODO: randomize birthDateTime
                        patient.birthDatetime = DateTime.new(1994)
                        patient.givenNames = [type]
                        # Add patient characteristics
                        data_element = generate_loaded_datatype("QDM::PatientCharacteristicSex")
                        patient.dataElements.push(data_element)
                        data_element = generate_loaded_datatype("QDM::PatientCharacteristicRace")
                        patient.dataElements.push(data_element)
                        data_element = generate_loaded_datatype("QDM::PatientCharacteristicEthnicity")
                        patient.dataElements.push(data_element)
                        data_element = generate_loaded_datatype("QDM::PatientCharacteristicBirthdate")
                        patient.dataElements.push(data_element)
                    end

                    data_element = generate_loaded_datatype(type)
                    patient.dataElements.push(data_element)
                    # if type is negatable, add a negated version to the patient
                    if (data_element.fields.keys.include? "negationRationale")
                        negated_data_element = generate_loaded_datatype(type, true)
                        patient.dataElements.push(negated_data_element)
                    end
                    if (patient_per_type)
                        patients.push(patient)
                    end
                end
            end

            if (!patient_per_type)
                return [patient]
            else
                return patients
            end
        end

        def self.get_datatypes(modelinfo_file)
            modelinfo = File.open(modelinfo_file) { |f| Nokogiri::XML(f) }
            datatypes = []
            # Loop through each typeInfo node (each of these is a QDM datatype)
            modelinfo.xpath('//ns4:typeInfo').each do |type|
                # Grab the name of this QDM datatype
                datatype_name = type.attributes['name'].value.split('.').last
                exclusion_array = ["Component", "Id", "Patient", "ResultComponent", "FacilityLocation"]
                # Store datatype and its attributes (reject irrelevant datatypes)
                next if datatype_name.include?('Negative') || datatype_name.include?('Positive') || 
                        datatype_name.include?('QDMBaseType') || (exclusion_array.include? datatype_name)
                datatypes.push(datatype_name)
            end
            datatypes
        end

        def self.generate_loaded_datatype(data_element_type, negate_data_element=false)
            data_element = QDM.const_get(data_element_type).new()
            fields = data_element.typed_attributes.keys
            fields.each do |field_name|
                # ignore these fields, they areused by mongoose
                next if ['_id','_type'].include? field_name
                if(!data_element[field_name] || data_element[field_name] == [])
                    populate_fields(field_name, data_element, negate_data_element)
                end
            end
            return data_element
        end

        def self.populate_fields(field_name, data_element, negate_data_element)
            # There are certain fields that we want to populate manually
            if (field_name == "description")
                # Skip the setting of patient description for now
                return
            elsif (field_name == "negationRationale")
                if (negate_data_element)
                    data_element[field_name] = generate_code_field
                else
                    data_element[field_name] = nil
                end
            elsif (field_name == "components")
                data_element[field_name] = [QDM::Component.new()]
            elsif (field_name == "result")
                # TODO: Result can be MANY Integer, Decimal, Code, Quantity or Ratio randomize this
                data_element[field_name] = generate_code_field
            elsif (field_name == "diagnoses")
                # TODO Randomize counta and contents of diagnosis
                data_element[field_name] = [QDM::Diagnosis.new()]
            elsif (field_name == "dataElementCodes")
                # Populate dataElementCodes with codes specifically for data element type
                data_element[field_name] = [generate_code_field]
            else
                # Fallback to populating fields by expected type
                populate_field_by_type(field_name, data_element)
            end
        end

        def self.populate_field_by_type(field_name, data_element)
            field_type = data_element.fields[field_name].type
            if (field_type == QDM::Code)
                data_element[field_name] = generate_code_field
            elsif (field_type == Date )
                # TODO: Randomize date
                data_element[field_name] = Date.today
            elsif (field_type == DateTime)
                # TODO: Randomize date
                data_element[field_name] = DateTime.new(2019)
            elsif (field_type == QDM::Interval)
                # TODO: Randomize Interval Type (Date,DateTime....) and randomize values, including lowClosed & highClosed
                data_element[field_name] = QDM::Interval.new(DateTime.new(2018),DateTime.new(2019))
            elsif (field_type == QDM::Quantity)
                # TODO Randomize value and parameters for Quantity
                data_element[field_name] = QDM::Quantity.new(100, "mg")
            elsif (field_type == QDM::Id)
                # TODO randomize value
                data_element[field_name] = QDM::Id.new()
            elsif (field_type == Integer)
                # TODO randomize value
                data_element[field_name] = 3
            else
                puts("Unknown Type in patient generator for field #{field_name}, type #{field_type} in #{data_element._type}")
            end
        end

        def self.generate_code_field
            # TODO: use code with all parameters, possibly randomize parameter values and optional information
            return QDM::Code.new('1234','SNOMED-CT')
        end

    end
end