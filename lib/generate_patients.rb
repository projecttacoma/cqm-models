require('nokogiri')
require_relative '../app/models/models'

module QDM
    module PatientGeneration
        def self.generate_exhastive_data_element_patients(patient_per_type = true)
            datatypes = get_datatypes(File.join(File.dirname(__FILE__), '../modelinfo/qdm-modelinfo-5.4.xml'))
            patients = []
            cqm_patient = nil

            datatypes.each do |type|
                if (!type.include? "PatientCharacteristic")
                    # 1 Patient Per data element type containing negated and non-negated type (if negatable)
                    if (cqm_patient == nil || patient_per_type)
                        cqm_patient = CQM::Patient.new()
                        qdm_patient = QDM::Patient.new()
                        cqm_patient.givenNames = [type]
                        cqm_patient.familyName = "#{type} Test Patient"
                        qdm_patient.extendedData =  {}
                        qdm_patient.extendedData['medical_record_number'] = "1"
                        # TODO: randomize birthDateTime
                        qdm_patient.birthDatetime = DateTime.new(1994)
                        # Add patient characteristics
                        data_element = generate_loaded_datatype("QDM::PatientCharacteristicSex")
                        qdm_patient.dataElements.push(data_element)
                        data_element = generate_loaded_datatype("QDM::PatientCharacteristicRace")
                        qdm_patient.dataElements.push(data_element)
                        data_element = generate_loaded_datatype("QDM::PatientCharacteristicEthnicity")
                        qdm_patient.dataElements.push(data_element)
                        data_element = generate_loaded_datatype("QDM::PatientCharacteristicBirthdate")
                        qdm_patient.dataElements.push(data_element)
                        cqm_patient.qdmPatient = qdm_patient
                    end

                    data_element = generate_loaded_datatype(type)
                    qdm_patient.dataElements.push(data_element)
                    # if type is negatable, add a negated version to the patient
                    if (data_element.fields.keys.include? "negationRationale")
                        negated_data_element = generate_loaded_datatype(type, true)
                        qdm_patient.dataElements.push(negated_data_element)
                    end
                    if (patient_per_type)
                        patients.push(cqm_patient)
                    end
                end
            end

            if (!patient_per_type)
                return [cqm_patient]
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
                data_element[field_name] = [generate_component]
            elsif (field_name == "result")
                # TODO: Result can be MANY Integer, Decimal, Code, Quantity or Ratio randomize this
                data_element[field_name] = generate_code_field
            elsif (field_name == "diagnoses")
                # TODO Randomize counta and contents of diagnosis
                data_element[field_name] = [QDM::Diagnosis.new()]
            elsif (field_name == "dataElementCodes")
                # Populate dataElementCodes with codes specifically for data element type
                data_element[field_name] = [generate_code_field]
            elsif (field_name == "facilityLocations")
                # TODO Randomize number of facility locations added
                data_element[field_name] = [generate_facility_location]
            elsif (field_name == "facilityLocation")
                # TODO Randomize number of facility locations added
                data_element[field_name] = generate_facility_location
            elsif (field_name == "targetOutcome")
                # TODO Randomize type of targetOutcome, use code for now
                data_element[field_name] = generate_code_field
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
                data_element[field_name] = generate_date_interval_field
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

        def self.generate_component
            component = QDM::Component.new()
            component.code = generate_code_field
            # TODO Randomize the type of the result
            component.result = generate_code_field
            return component
        end

        def self.generate_facility_location
            facility_location = QDM::FacilityLocation.new()
            facility_location.code = generate_code_field
            facility_location.locationPeriod = generate_date_interval_field
            return facility_location
        end

        def self.generate_code_field
            # TODO: use code with all parameters, possibly randomize parameter values and optional information
            return QDM::Code.new('1234','SNOMED-CT')
        end

        def self.generate_date_interval_field
            # TODO: Randomize dates in interval and open/closed parameters
            return QDM::Interval.new(DateTime.new(2018),DateTime.new(2019))
        end

    end
end