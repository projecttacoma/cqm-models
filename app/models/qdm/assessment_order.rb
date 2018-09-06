module QDM
  # app/models/qdm/assessment_order.rb
  class AssessmentOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :negationRationale, type: QDM::Code
    field :reason, type: QDM::Code
    field :qdmVersion, type: String, default: '5.4'
  end
end
