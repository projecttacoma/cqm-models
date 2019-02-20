module QDM
  # app/models/qdm/supply_request.rb
  class SupplyRequest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :category
    field :priority
    field :item
    field :quantity
    field :parameter
    field :occurrence
    field :authoredOn
    field :requester
    field :supplier
    field :reasonQDM::Code
    field :reasonReference
    field :deliverFrom
    field :deliverTo
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
