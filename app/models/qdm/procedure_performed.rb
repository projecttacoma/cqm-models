module QDM
  # app/models/qdm/procedure_performed.rb
  class ProcedurePerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :reason, type: Mixed
    field :method, type: Mixed
    field :result
    field :status, type: Mixed
    field :anatomicalApproachSite, type: Mixed
    field :anatomicalLocationSite, type: Mixed
    field :ordinality, type: Mixed
    field :incisionDatetime, type: DateTime
    field :negationRationale, type: Mixed
    field :components, type: Array
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.67'
    field :category, type: String, default: 'procedure'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.3'
  end
end
