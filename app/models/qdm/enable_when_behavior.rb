module QDM
  # app/models/qdm/enable_when_behavior.rb
  class EnableWhenBehavior < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
