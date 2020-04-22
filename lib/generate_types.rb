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

    def self.generate_component
      component = QDM::Component.new
      component.code = generate_code_field
      # Component.result type values: Integer, Decimal, Code, Quantity, Ratio, DateTime, Time (from modelinfo file)
      # low occurence rate in 2020/2021 measures, so may not randomized to include DateTime/Time yet
      component.result = generate_result
      component
    end

    def self.generate_facility_location
      facility_location = QDM::FacilityLocation.new
      facility_location.code = generate_code_field
      facility_location.locationPeriod = generate_date_interval_field
      facility_location
    end

    def self.generate_code_field
      # relevant code systems as of March 2020
      code_sys = ['2.16.840.1.113883.6.96', '2.16.840.1.113883.6.90', '2.16.840.1.113883.6.103',
                  '2.16.840.1.113883.6.104', '2.16.840.1.113883.6.12', '2.16.840.1.113883.6.88',
                  '2.16.840.1.113883.6.1', '2.16.840.1.113883.12.292', '2.16.840.1.113883.6.285',
                  '2.16.840.1.113883.6.4', '2.16.840.1.113883.6.14', '2.16.840.1.113883.6.13']

      # 1-15 digit codes
      code = rand(1_000_000_000_000_000)
      QDM::Code.new(code.to_s, code_sys[rand(12)], 'Display Name', '2018-09')
    end

    def self.generate_datetime
      # Does not give a random time... just randomizes the date +/-365000 days
      rand(DateTime.now - 36_500..DateTime.now + 36_500)
    end

    def self.generate_quantity
      # TODO: randomize for no unit situation?

      # pulled from realistic units (UCUM)
      # https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.12839/expansion/Latest
      unit = ['%', '/10*10', '10*12/L', 'K', 'U/(10.g){feces}', '[IU]/g', 'cm', 'erg',
              'g/L', 'kat', 'mA', 'osm', 's/{control}', '{CPM}', '{Pan_Bio\'U}', '{mutation}']
      QDM::Quantity.new(rand(0.0..10_000.0), unit[rand(16)])
    end

    def self.generate_date_interval_field
      date1 = generate_datetime
      date2 = generate_datetime

      # endure low before high
      # randomly true/false lowClosed and highClosed parameters
      QDM::Interval.new([date1, date2].min, [date1, date2].max, rand(2).zero?, rand(2).zero?)
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
      # could also randomize length of string
      qdm_id = QDM::Identifier.new
      qdm_id.value = random_string(12) # 'TestValue'
      qdm_id.namingSystem = random_string(12) # 'TestNamingSystem'
      qdm_id
    end

    def self.generate_result
      # minimum allowed set Integer (converts incorrectly for tests), Decimal, Code, Quantity, Ratio
      # sometimes allowed to be DateTime, Time, or Date in certain contexts (from modelinfo file)
      case Random.rand(3)
      when 0 then return rand(0.0..10_000.0)
      when 1 then return generate_code_field
      when 2 then return generate_quantity
      end
    end

    def self.random_string(length)
      # create and array of size length and map to a random character from ! (33) to ~ (126)
      [*'a'..'z', *'A'..'Z'].sample(length).join
    end
  end
end
