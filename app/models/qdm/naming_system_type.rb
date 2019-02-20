module QDM
  # app/models/qdm/naming_system_type.rb
  class NamingSystemType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
