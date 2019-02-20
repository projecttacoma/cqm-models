module QDM
  # app/models/qdm/assertion_direction_type.rb
  class AssertionDirectionType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
