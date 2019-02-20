module QDM
  # app/models/qdm/group_type.rb
  class GroupType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
