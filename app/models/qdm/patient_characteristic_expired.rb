module QDM
  # app/models/qdm/patient_characteristic_expired.rb
  class PatientCharacteristicExpired < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :expiredDatetime, type: DateTime
    field :cause, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.57'
    field :category, type: String, default: 'condition'
    field :qdmVersion, type: String, default: '5.3'
  end
end
