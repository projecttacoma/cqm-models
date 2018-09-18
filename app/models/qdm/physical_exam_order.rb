module QDM
  # app/models/qdm/physical_exam_order.rb
  class PhysicalExamOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :anatomicalLocationSite, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.61'
    field :qdmVersion, type: String, default: '5.4'
  end
end
