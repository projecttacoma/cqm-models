module QDM
  # app/models/qdm/claim.rb
  class Claim < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :type
    field :subType
    field :use
    field :patient
    field :billablePeriod
    field :created
    field :enterer
    field :insurer
    field :provider
    field :priority
    field :fundsReserve
    field :related
    field :prescription
    field :originalPrescription
    field :payee
    field :referral
    field :facility
    field :careTeam
    field :supportingInfo
    field :diagnosis
    field :procedure
    field :insurance
    field :accident
    field :item
    field :total
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
