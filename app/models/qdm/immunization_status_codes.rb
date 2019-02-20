module QDM
  # app/models/qdm/immunization_status_codes.rb
  class ImmunizationStatusCodes < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
