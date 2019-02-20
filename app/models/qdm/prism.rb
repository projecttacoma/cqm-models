module QDM
  # app/models/qdm/prism.rb
  class Prism < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :amount
    field :base
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
