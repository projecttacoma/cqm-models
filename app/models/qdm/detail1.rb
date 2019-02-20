module QDM
  # app/models/qdm/detail1.rb
  class Detail1 < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :productOrService
    field :modifier
    field :quantity
    field :unitPrice
    field :factor
    field :net
    field :noteNumber
    field :adjudication
    field :subDetail
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
