require_relative '../app/models/models'

module QDM
  # BaseTypeGeneration contains functions to randomly generate basetypes used by PatientGeneration
  module BaseTypeGeneration

    def self.generate_diagnosis
      diagnosis_component = QDM::DiagnosisComponent.new
      diagnosis_component.code = generate_code_field
      diagnosis_component.presentOnAdmissionIndicator = generate_code_field
      diagnosis_component.rank = 1
      diagnosis_component
    end

    def self.generate_entity
      case Random.rand(4)
      when 0 then return generate_patient_entity
      when 1 then return generate_care_partner_entity
      when 2 then return generate_organization_entity
      when 3 then return generate_practitioner_entity
      end
    end

    def self.generate_patient_entity
      patient_entity = QDM::PatientEntity.new
      patient_entity.identifier = generate_qdm_id
      patient_entity
    end
    
    def self.generate_care_partner_entity
      care_partner_entity = QDM::CarePartner.new
      care_partner_entity.identifier = generate_qdm_id
      care_partner_entity.relationship = generate_code_field
      care_partner_entity
    end
    
    def self.generate_organization_entity
      organization_entity = QDM::Organization.new
      organization_entity.identifier = generate_qdm_id
      organization_entity.type = generate_code_field
      organization_entity
    end

    def self.generate_practitioner_entity
      practitioner_entity = QDM::Practitioner.new
      practitioner_entity.identifier = generate_qdm_id
      practitioner_entity.role = generate_code_field
      practitioner_entity.specialty = generate_code_field
      practitioner_entity.qualification = generate_code_field
      practitioner_entity
    end

    def self.generate_component
      component = QDM::Component.new
      component.code = generate_code_field
      # TODO: Randomize the type of the result
      component.result = generate_code_field
      component
    end

    def self.generate_facility_location
      facility_location = QDM::FacilityLocation.new
      facility_location.code = generate_code_field
      facility_location.locationPeriod = generate_date_interval_field
      facility_location
    end

    def self.generate_code_field
      # TODO: use code with all parameters, possibly randomize parameter values and optional information
      QDM::Code.new('1234', '2.16.840.1.113883.6.96')
    end

    def self.generate_datetime
      # TODO: Randomize dateTime
      DateTime.new(2019)
    end

    def self.generate_quantity
      # TODO: Randomize value and parameters for Quantity
      QDM::Quantity.new(100, 'mg')
    end

    def self.generate_date_interval_field
      # TODO: Randomize dates in interval and open/closed parameters
      QDM::Interval.new(DateTime.new(2018), DateTime.new(2019))
    end

    def self.generate_cqm_patient(type)
      cqm_patient = CQM::Patient.new
      cqm_patient.givenNames = [type]
      cqm_patient.familyName = "#{type} Test Patient"
      cqm_patient
    end

    def self.generate_qdm_patient
      qdm_patient = QDM::Patient.new
      qdm_patient.extendedData = {}
      qdm_patient.extendedData['medical_record_number'] = '1'
      qdm_patient.birthDatetime = generate_datetime
      qdm_patient
    end

    def self.generate_qdm_id
      # TODO: randomize values
      qdm_id = QDM::Identifier.new
      qdm_id.value = 'TestValue'
      qdm_id.namingSystem = 'TestNamingSystem'
      qdm_id
    end
  end
end
