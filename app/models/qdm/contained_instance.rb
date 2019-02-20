module QDM
  # app/models/qdm/contained_instance.rb
  class ContainedInstance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :resourceId
    field :versionId
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
