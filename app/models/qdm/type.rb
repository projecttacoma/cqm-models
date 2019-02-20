module QDM
  # app/models/qdm/type.rb
  class Type < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :profile
    field :targetProfile
    field :aggregation
    field :versioning
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
