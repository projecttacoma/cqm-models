module QDM
  # app/models/qdm/laboratory_test_order.rb
  class LaboratoryTestOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason
    field :method
    field :negationRationale
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.41'
    field :category, type: String, default: 'laboratory_test'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.3'
  end
end
