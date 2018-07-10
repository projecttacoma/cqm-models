module QDM
  # app/models/qdm/laboratory_test_performed.rb
  class LaboratoryTestPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :status, type: Mixed
    field :method, type: Mixed
    field :result
    field :resultDatetime, type: DateTime
    field :reason, type: Mixed
    field :referenceRange, type: QDM::Interval
    field :negationRationale, type: Mixed
    field :components, type: Array
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.42'
    field :category, type: String, default: 'laboratory_test'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.3'
  end
end
