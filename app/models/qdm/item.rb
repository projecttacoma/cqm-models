module QDM
  # app/models/qdm/item.rb
  class Item < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :sequence
    field :careTeamSequence
    field :diagnosisSequence
    field :procedureSequence
    field :informationSequence
    field :revenue
    field :category
    field :productOrService
    field :modifier
    field :programQDM::Code
    field :serviced
    field :location
    field :quantity
    field :unitPrice
    field :factor
    field :net
    field :udi
    field :bodySite
    field :subSite
    field :encounter
    field :noteNumber
    field :adjudication
    field :detail
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
