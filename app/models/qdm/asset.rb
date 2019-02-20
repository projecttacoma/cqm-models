module QDM
  # app/models/qdm/asset.rb
  class Asset < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :scope
    field :type
    field :typeReference
    field :subtype
    field :relationship
    field :context
    field :condition
    field :periodType
    field :period
    field :usePeriod
    field :text
    field :linkId
    field :answer
    field :securityLabelNumber
    field :valuedItem
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
