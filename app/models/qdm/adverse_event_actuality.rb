module QDM
  # app/models/qdm/adverse_event_actuality.rb
  class AdverseEventActuality < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
