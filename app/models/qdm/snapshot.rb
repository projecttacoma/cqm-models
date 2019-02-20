module QDM
  # app/models/qdm/snapshot.rb
  class Snapshot < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :element
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
