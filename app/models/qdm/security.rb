module QDM
  # app/models/qdm/security.rb
  class Security < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :cors
    field :service
    field :description
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
