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

    def self.generate_entities(data_element)
      data_element.performer = QDM::BaseTypeGeneration.generate_entity if data_element.respond_to? 'performer'
      data_element.recorder = QDM::BaseTypeGeneration.generate_entity if data_element.respond_to? 'recorder'
      data_element.requester = QDM::BaseTypeGeneration.generate_entity if data_element.respond_to? 'requester'
      data_element.sender = QDM::BaseTypeGeneration.generate_entity if data_element.respond_to? 'sender'
      data_element.recipient = QDM::BaseTypeGeneration.generate_entity if data_element.respond_to? 'recipient'
      data_element.participant = QDM::BaseTypeGeneration.generate_entity if data_element.respond_to? 'participant'
      data_element.prescriber = QDM::BaseTypeGeneration.generate_entity if data_element.respond_to? 'prescriber'
      data_element.dispenser = QDM::BaseTypeGeneration.generate_entity if data_element.respond_to? 'dispenser'
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
      code = rand(1000000000000000)
      QDM::Code.new(code.to_s, code_sys[rand(12)], 'Display Name', '2018-09')
    end

    def self.generate_datetime

      # Does not give a random time... just randomizes the date +/-365000 days
      rand(DateTime.now-36500..DateTime.now+36500)
    end

    def self.generate_quantity
      # TODO: randomize for no unit situation?

      # pulled from realistic units (UCUM)
      # https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.12839/expansion/Latest
      unit = ['%','/10*10', '10*12/L', 'K', 'U/(10.g){feces}', '[IU]/g', 'cm', 'erg',
      'g/L', 'kat', 'mA', 'osm', 's/{control}', '{CPM}', '{Pan_Bio\'U}', '{mutation}']
      QDM::Quantity.new(Random.rand(10000), unit[rand(16)])
    end

    def self.generate_date_interval_field
      date1 = generate_datetime
      date2 = generate_datetime

      # endure low before high
      # randomly true/false lowClosed and highClosed parameters
      QDM::Interval.new([date1,date2].min, [date1,date2].max, rand(2) == 0, rand(2) == 0)
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
      # minimum allowed set Integer, Decimal, Code, Quantity, Ratio
      # sometimes allowed to be DateTime, Time, or Date in certain contexts (from modelinfo file)
      case Random.rand(4)
      when 0 then return rand(10000)
      when 1 then return rand(0.0..10000.0)
      when 2 then return generate_code_field
      when 3 then return generate_quantity
      when 4 then return generate_ratio
      end
    end

    def self.generate_ratio
      ratio = QDM::Ratio.new
      ratio.numerator = rand(10000)
      ratio.denominator = rand(10000)
      ratio
    end

    def self.random_string(length)
      #create and array of size length and map to a random character from ! (33) to ~ (126)
      (0...length).map { (33 + rand(94)).chr }.join
    end

    end
  end
end
