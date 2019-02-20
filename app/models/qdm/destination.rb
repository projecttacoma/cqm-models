module QDM
  # app/models/qdm/destination.rb
  class Destination < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :index
    field :profile
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
