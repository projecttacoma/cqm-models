module QDM
  # app/models/qdm/software.rb
  class Software < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :version
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
