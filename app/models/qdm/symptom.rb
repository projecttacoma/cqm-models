module QDM
  # app/models/qdm/symptom.rb
  class Symptom < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :prevalencePeriod, type: QDM::Interval
    field :severity, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.116'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.136'
    field :category, type: String, default: 'symptom'
    field :qdmVersion, type: String, default: '5.4'
  end
end
