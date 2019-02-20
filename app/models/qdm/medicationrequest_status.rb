module QDM
  # app/models/qdm/medicationrequest_status.rb
  class MedicationrequestStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
