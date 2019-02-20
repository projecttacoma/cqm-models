module QDM
  # app/models/qdm/add_item.rb
  class AddItem < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :itemSequence
    field :detailSequence
    field :subDetailSequence
    field :provider
    field :productOrService
    field :modifier
    field :programQDM::Code
    field :serviced
    field :location
    field :quantity
    field :unitPrice
    field :factor
    field :net
    field :bodySite
    field :subSite
    field :noteNumber
    field :adjudication
    field :detail
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
