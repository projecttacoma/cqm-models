require_relative '../app/models/models'

module QDM
  # BaseTypeGeneration contains functions to randomly generate basetypes used by PatientGeneration
  module BaseTypeGeneration
    def self.generate_component
      code = generate_code_field
      # TODO: Randomize the type of the result
      result = generate_code_field
      QDM::Component.new(code, result)
    end

    def self.generate_facility_location
      code = generate_code_field
      locationPeriod = generate_date_interval_field
      QDM::FacilityLocation.new(code, locationPeriod)
    end

    def self.generate_code_field
      # TODO: use code with all parameters, possibly randomize parameter values and optional information
      QDM::Code.new('1234', 'SNOMED-CT')
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
  end
end
