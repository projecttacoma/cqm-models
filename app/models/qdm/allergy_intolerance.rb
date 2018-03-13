module QDM
  # app/models/qdm/allergy_intolerance.rb
  class AllergyIntolerance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :prevalence_period, type: QDM::Interval
    field :type, type: QDM::Code
    field :severity, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.119'
    field :category, type: String, default: 'allergy'
    field :qdm_status, type: String, default: 'intolerance'
    field :qdm_version, type: String, default: '5.3'
  end
end
