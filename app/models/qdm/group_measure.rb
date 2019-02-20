module QDM
  # app/models/qdm/group_measure.rb
  class GroupMeasure < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
