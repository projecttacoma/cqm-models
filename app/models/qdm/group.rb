module QDM
  # app/models/qdm/group.rb
  class Group < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :source
    field :sourceVersion
    field :target
    field :targetVersion
    field :element
    field :unmapped
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
