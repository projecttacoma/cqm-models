module QDM
  # app/models/qdm/verification_result.rb
  class VerificationResult < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :target
    field :targetLocation
    field :need
    field :status
    field :statusDate
    field :validationType
    field :validationProcess
    field :frequency
    field :lastPerformed
    field :nextScheduled
    field :failureAction
    field :primarySource
    field :attestation
    field :validator
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
