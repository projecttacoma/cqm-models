module QDM
  # app/models/qdm/sub_detail.rb
  class SubDetail < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :sequence
    field :revenue
    field :category
    field :productOrService
    field :modifier
    field :programQDM::Code
    field :quantity
    field :unitPrice
    field :factor
    field :net
    field :udi
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
