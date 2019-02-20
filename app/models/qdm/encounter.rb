module QDM
  # app/models/qdm/encounter.rb
  class Encounter < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :statusHistory
    field :class
    field :classHistory
    field :type
    field :serviceType
    field :priority
    field :subject
    field :episodeOfCare
    field :basedOn
    field :participant
    field :appointment
    field :period
    field :length
    field :reasonQDM::Code
    field :reasonReference
    field :diagnosis
    field :account
    field :hospitalization
    field :location
    field :serviceProvider
    field :partOf
    field :hqmfOid, type: String, default: '2.16.840.1.113883.3.560.1.4'
    field :qdmCategory, type: String, default: 'encounter'
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
