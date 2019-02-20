module QDM
  # app/models/qdm/operation.rb
  class Operation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :definition
    field :documentation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
