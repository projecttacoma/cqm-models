module QDM
  # app/models/qdm/related_action.rb
  class RelatedAction < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :actionId
    field :relationship
    field :offset
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
