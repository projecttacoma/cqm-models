module QDM
  # app/models/qdm/allergy_intolerance_severity.rb
  class AllergyIntoleranceSeverity < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
