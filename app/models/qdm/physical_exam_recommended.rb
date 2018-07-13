module QDM
  # app/models/qdm/physical_exam_recommended.rb
  class PhysicalExamRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :method, type: QDM::Code
    field :anatomicalLocationSite, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :hqmfOid, type: String, default: '22.16.840.1.113883.10.20.28.3.63'
    field :category, type: String, default: 'physical_exam'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.3'
  end
end
