module QDM
  # app/models/qdm/procedure_performed.rb
  class ProcedurePerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :reason, type: QDM::Code
    field :method, type: QDM::Code
    field :result
    field :status, type: QDM::Code
    field :anatomicalLocationSite, type: QDM::Code
    field :ordinality, type: QDM::Code
    field :incisionDatetime, type: DateTime
    field :negationRationale, type: QDM::Code
    field :components, type: Array
    field :qdmTitle, type: String, default: 'Procedure, Performed'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.67'
    field :qdmCategory, type: String, default: 'procedure'
    field :qdmStatus, type: String, default: 'performed'
    field :hqmfTitle, type: String, default: 'Procedure, Performed'
    field :qdmVersion, type: String, default: '5.4'
  end
end
