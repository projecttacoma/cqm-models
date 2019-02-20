module QDM
  # app/models/qdm/cost.rb
  class Cost < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :applicability
    field :qualifiers
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
