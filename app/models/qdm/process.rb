module QDM
  # app/models/qdm/process.rb
  class Process < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :title
    field :description
    field :preConditions
    field :postConditions
    field :step
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
