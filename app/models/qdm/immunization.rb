module QDM
  # app/models/qdm/immunization.rb
  class Immunization < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :statusReason
    field :vaccineQDM::Code
    field :patient
    field :encounter
    field :occurrence
    field :recorded
    field :primarySource
    field :reportOrigin
    field :location
    field :manufacturer
    field :lotNumber
    field :expirationDate
    field :site
    field :route
    field :doseQDM::Quantity
    field :performer
    field :note
    field :reasonQDM::Code
    field :reasonReference
    field :isSubpotent
    field :subpotentReason
    field :education
    field :programEligibility
    field :fundingSource
    field :reaction
    field :protocolApplied
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
