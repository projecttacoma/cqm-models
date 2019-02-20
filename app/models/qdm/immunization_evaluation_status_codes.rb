module QDM
  # app/models/qdm/immunization_evaluation_status_codes.rb
  class ImmunizationEvaluationStatusCodes < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
