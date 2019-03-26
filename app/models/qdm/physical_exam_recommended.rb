module QDM
  # app/models/qdm/physical_exam_recommended.rb
  class PhysicalExamRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :anatomicalLocationSite, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :qdmTitle, type: String, default: 'Physical Exam, Recommended'
    field :hqmfOid, type: String, default: '22.16.840.1.113883.10.20.28.4.63'
    field :qdmCategory, type: String, default: 'physical_exam'
    field :qdmStatus, type: String, default: 'recommended'
    field :hqmfTitle, type: String, default: 'Physical Exam, Recommended'
    field :qdmVersion, type: String, default: '5.4'
  end
end
