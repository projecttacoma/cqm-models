module QDM
  # app/models/qdm/allergy_intolerance.rb
  class AllergyIntolerance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :prevalencePeriod, type: QDM::Interval
    field :type, type: QDM::Code
    field :severity, type: QDM::Code
    embeds_many :recorder, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Allergy/Intolerance'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.119'
    field :qdmCategory, type: String, default: 'allergy'
    field :qdmStatus, type: String, default: 'intolerance'
    field :qdmVersion, type: String, default: '5.6'
  end
end
