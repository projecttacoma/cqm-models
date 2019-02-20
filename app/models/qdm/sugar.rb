module QDM
  # app/models/qdm/sugar.rb
  class Sugar < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :name
    field :residueSite
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
