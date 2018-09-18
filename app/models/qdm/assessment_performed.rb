module QDM
  # app/models/qdm/assessment_performed.rb
  class AssessmentPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :negationRationale, type: QDM::Code
    field :reason, type: QDM::Code
    field :method, type: QDM::Code
    field :result
    field :components, type: Array
    embeds_many :relatedTo, class_name: 'QDM::Id'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.117'
    field :qdmVersion, type: String, default: '5.4'
  end
end
