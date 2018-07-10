module QDM
  # app/models/qdm/physical_exam_order.rb
  class PhysicalExamOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: Mixed
    field :method, type: Mixed
    field :anatomicalLocationSite, type: Mixed
    field :negationRationale, type: Mixed
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.61'
    field :category, type: String, default: 'physical_exam'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.3'
  end
end
