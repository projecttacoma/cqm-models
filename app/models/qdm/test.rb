module QDM
  # app/models/qdm/test.rb
  class Test < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :description
    field :action
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
