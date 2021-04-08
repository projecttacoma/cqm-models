module QDM
  # app/models/qdm/diagnostic_study_performed.rb
  class DiagnosticStudyPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :reason, type: QDM::Code
    field :result
    field :resultDatetime, type: DateTime
    field :interpretation, type: QDM::Code
    field :status, type: QDM::Code
    field :method, type: QDM::Code
    field :facilityLocation, type: QDM::FacilityLocation
    field :negationRationale, type: QDM::Code
    field :components, type: Array
    embeds_many :performer, class_name: 'QDM::Entity'
    field :relatedTo, type: Array
    field :qdmTitle, type: String, default: 'Diagnostic Study, Performed'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.23'
    field :qdmCategory, type: String, default: 'diagnostic_study'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.6'
  end
end
