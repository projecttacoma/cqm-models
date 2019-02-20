module QDM
  # app/models/qdm/repository.rb
  class Repository < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :url
    field :name
    field :datasetId
    field :variantsetId
    field :readsetId
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
