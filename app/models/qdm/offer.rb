module QDM
  # app/models/qdm/offer.rb
  class Offer < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :party
    field :topic
    field :type
    field :decision
    field :decisionMode
    field :answer
    field :text
    field :linkId
    field :securityLabelNumber
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
