module QDM
  # app/models/qdm/naming_system_identifier_type.rb
  class NamingSystemIdentifierType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
