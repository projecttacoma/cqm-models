module QDM
  # app/models/qdm/allergy_intolerance.rb
  class AllergyIntolerance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :prevalencePeriod, type: QDM::Interval
    field :type, type: QDM::Code
    field :severity, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.119'
    field :category, type: String, default: 'allergy'
    field :qdmStatus, type: String, default: 'intolerance'
    field :qdmVersion, type: String, default: '5.3'
  end
end
