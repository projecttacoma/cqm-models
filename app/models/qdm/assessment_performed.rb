module QDM
  # app/models/qdm/assessment_performed.rb
  class AssessmentPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :negationRationale, type: QDM::Code
    field :reason, type: QDM::Code
    field :method, type: QDM::Code
    field :result
    field :interpretation, type: QDM::Code
    field :components, type: Array
    field :relatedTo, type: Array
    embeds_many :performer, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Assessment, Performed'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.117'
    field :qdmCategory, type: String, default: 'assessment'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.6'
  end
end
