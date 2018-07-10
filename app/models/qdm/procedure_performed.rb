module QDM
  # app/models/qdm/procedure_performed.rb
  class ProcedurePerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :reason
    field :method
    field :result
    field :status
    field :anatomicalApproachSite
    field :anatomicalLocationSite
    field :ordinality
    field :incisionDatetime, type: DateTime
    field :negationRationale
    field :components, type: Array
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.67'
    field :category, type: String, default: 'procedure'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.3'
  end
end
