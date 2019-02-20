module QDM
  # app/models/qdm/slicing.rb
  class Slicing < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :discriminator
    field :description
    field :ordered
    field :rules
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
