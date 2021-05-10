module QDM
  # app/models/qdm/diagnostic_study_order.rb
  class DiagnosticStudyOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :negationRationale, type: QDM::Code
    embeds_many :requester, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Diagnostic Study, Order'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.22'
    field :qdmCategory, type: String, default: 'diagnostic_study'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.6'
  end
end
