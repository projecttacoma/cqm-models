module QDM
  # app/models/qdm/physical_exam_performed.rb
  class PhysicalExamPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :reason, type: Mixed
    field :method, type: Mixed
    field :result
    field :anatomicalLocationSite, type: Mixed
    field :negationRationale, type: Mixed
    field :components, type: Array
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.62'
    field :category, type: String, default: 'physical_exam'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.3'
  end
end
