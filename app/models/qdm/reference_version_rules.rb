module QDM
  # app/models/qdm/reference_version_rules.rb
  class ReferenceVersionRules < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
