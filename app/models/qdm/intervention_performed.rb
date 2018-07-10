module QDM
  # app/models/qdm/intervention_performed.rb
  class InterventionPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :reason, type: Mixed
    field :result
    field :status, type: Mixed
    field :negationRationale, type: Mixed
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.36'
    field :category, type: String, default: 'intervention'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.3'
  end
end
