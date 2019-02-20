module QDM
  # app/models/qdm/slicing_rules.rb
  class SlicingRules < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
