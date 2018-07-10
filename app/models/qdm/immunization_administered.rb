module QDM
  # app/models/qdm/immunization_administered.rb
  class ImmunizationAdministered < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :reason, type: Mixed
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :route, type: Mixed
    field :negationRationale, type: Mixed
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.112'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.140'
    field :category, type: String, default: 'immunization'
    field :qdmStatus, type: String, default: 'administered'
    field :qdmVersion, type: String, default: '5.3'
  end
end
