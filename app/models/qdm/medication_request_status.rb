module QDM
  # app/models/qdm/medication_request_status.rb
  class MedicationRequestStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
