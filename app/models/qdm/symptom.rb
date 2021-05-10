module QDM
  # app/models/qdm/symptom.rb
  class Symptom < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :prevalencePeriod, type: QDM::Interval
    field :severity, type: QDM::Code
    embeds_many :recorder, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Symptom'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.116'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.136'
    field :qdmCategory, type: String, default: 'symptom'
    field :qdmVersion, type: String, default: '5.6'
  end
end
