module QDM
  # app/models/qdm/flag_status.rb
  class FlagStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
