module QDM
  # app/models/qdm/laboratory_test_recommended.rb
  class LaboratoryTestRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :method, type: Mixed
    field :reason, type: Mixed
    field :negationRationale, type: Mixed
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.43'
    field :category, type: String, default: 'laboratory_test'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.3'
  end
end
