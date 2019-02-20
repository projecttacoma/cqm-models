module QDM
  # app/models/qdm/processing.rb
  class Processing < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :procedure
    field :additive
    field :time
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
