module QDM
  # app/models/qdm/assessment_order.rb
  class AssessmentOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :negationRationale, type: QDM::Code
    field :reason, type: QDM::Code
    embeds_many :requester, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Assessment, Order'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.131'
    field :qdmCategory, type: String, default: 'assessment'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.6'
  end
end
