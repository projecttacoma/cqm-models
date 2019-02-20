module QDM
  # app/models/qdm/origin.rb
  class Origin < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :index
    field :profile
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
