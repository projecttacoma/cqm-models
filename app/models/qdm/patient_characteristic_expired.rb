module QDM
  # app/models/qdm/patient_characteristic_expired.rb
  class PatientCharacteristicExpired < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :expiredDatetime, type: DateTime
    field :cause, type: QDM::Code
    field :qdmTitle, type: String, default: 'Patient Characteristic Expired'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.57'
    field :qdmCategory, type: String, default: 'patient_characteristic'
    field :qdmStatus, type: String, default: 'expired'
    field :qdmVersion, type: String, default: '5.6'
  end
end
