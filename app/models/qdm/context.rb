module QDM
  # app/models/qdm/context.rb
  class Context < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :encounter
    field :event
    field :period
    field :facilityType
    field :practiceSetting
    field :sourcePatientInfo
    field :related
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
