module QDM
  # app/models/qdm/udi_entry_type.rb
  class UdiEntryType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
