module QDM
  # app/models/qdm/diagnosis.rb
  class Diagnosis < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :diagnosis
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.110'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.135'
    field :qdmCategory, type: String, default: 'condition'
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
