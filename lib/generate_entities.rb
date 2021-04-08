require_relative '../app/models/models'
require('generate_types')

module QDM
  # BaseTypeGeneration contains functions to randomly generate basetypes used by PatientGeneration
  module EntityGeneration
    def self.generate_entities(data_element)
      data_element.performer = [generate_entity] if data_element.respond_to? 'performer'
      data_element.recorder = [generate_entity] if data_element.respond_to? 'recorder'
      data_element.requester = [generate_entity] if data_element.respond_to? 'requester'
      data_element.sender = [generate_entity] if data_element.respond_to? 'sender'
      data_element.recipient = [generate_entity] if data_element.respond_to? 'recipient'
      data_element.participant = [generate_entity] if data_element.respond_to? 'participant'
      data_element.prescriber = [generate_entity] if data_element.respond_to? 'prescriber'
      data_element.dispenser = [generate_entity] if data_element.respond_to? 'dispenser'
    end

    def self.generate_entity
      case Random.rand(5)
      when 0 then return generate_patient_entity
      when 1 then return generate_care_partner_entity
      when 2 then return generate_organization_entity
      when 3 then return generate_practitioner_entity
      when 4 then return generate_location_entity
      end
    end

    def self.generate_patient_entity
      patient_entity = QDM::PatientEntity.new
      patient_entity.identifier = QDM::BaseTypeGeneration.generate_qdm_id
      patient_entity
    end

    def self.generate_care_partner_entity
      care_partner_entity = QDM::CarePartner.new
      care_partner_entity.identifier = QDM::BaseTypeGeneration.generate_qdm_id
      care_partner_entity.relationship = QDM::BaseTypeGeneration.generate_code_field
      care_partner_entity
    end

    def self.generate_organization_entity
      organization_entity = QDM::Organization.new
      organization_entity.identifier = QDM::BaseTypeGeneration.generate_qdm_id
      organization_entity.organizationType = QDM::BaseTypeGeneration.generate_code_field
      organization_entity
    end

    def self.generate_practitioner_entity
      practitioner_entity = QDM::Practitioner.new
      practitioner_entity.identifier = QDM::BaseTypeGeneration.generate_qdm_id
      practitioner_entity.role = QDM::BaseTypeGeneration.generate_code_field
      practitioner_entity.specialty = QDM::BaseTypeGeneration.generate_code_field
      practitioner_entity.qualification = QDM::BaseTypeGeneration.generate_code_field
      practitioner_entity
    end

    def self.generate_location_entity
      location_entity = QDM::Location.new
      location_entity.identifier = QDM::BaseTypeGeneration.generate_qdm_id
      location_entity.locationType = QDM::BaseTypeGeneration.generate_code_field
      location_entity
    end
  end
end
