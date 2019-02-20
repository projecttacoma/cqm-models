module QDM
  # app/models/qdm/reference_handling_policy.rb
  class ReferenceHandlingPolicy < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
