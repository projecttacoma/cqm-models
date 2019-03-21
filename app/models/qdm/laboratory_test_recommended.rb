module QDM
  # app/models/qdm/laboratory_test_recommended.rb
  class LaboratoryTestRecommended < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :hqmfTitle, type: String, default: 'Laboratory Test, Recommended'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.43'
    field :qdmCategory, type: String, default: 'laboratory_test'
    field :qdmStatus, type: String, default: 'recommended'
    field :qdmVersion, type: String, default: '5.4'
  end
end
