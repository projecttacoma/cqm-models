module QDM
  # app/models/qdm/primary_source.rb
  class PrimarySource < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :who
    field :type
    field :communicationMethod
    field :validationStatus
    field :validationDate
    field :canPushUpdates
    field :pushTypeAvailable
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
