module QDM
  # app/models/qdm/capability.rb
  class Capability < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :description
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
