module QDM
  # app/models/qdm/diagnostic_study_order.rb
  class DiagnosticStudyOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason
    field :method
    field :negationRationale
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.22'
    field :category, type: String, default: 'diagnostic_study'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.3'
  end
end
