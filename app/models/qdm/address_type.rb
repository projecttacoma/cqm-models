module QDM
  # app/models/qdm/address_type.rb
  class AddressType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
