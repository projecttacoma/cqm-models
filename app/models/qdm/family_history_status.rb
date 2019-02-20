module QDM
  # app/models/qdm/family_history_status.rb
  class FamilyHistoryStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
