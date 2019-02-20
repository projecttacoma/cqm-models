module QDM
  # app/models/qdm/network.rb
  class Network < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :address
    field :type
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
