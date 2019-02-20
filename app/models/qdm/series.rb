module QDM
  # app/models/qdm/series.rb
  class Series < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :uid
    field :number
    field :modality
    field :description
    field :numberOfInstances
    field :endpoint
    field :bodySite
    field :laterality
    field :specimen
    field :started
    field :performer
    field :instance
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
