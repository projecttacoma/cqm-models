module QDM
  # app/models/qdm/patient_characteristic_expired.rb
  class PatientCharacteristicExpired < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :expired_datetime, type: DateTime
    field :cause, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.57'
    field :category, type: String, default: 'condition'
    field :qdm_version, type: String, default: '5.3'
    field :class_name, type: String, default: 'PatientCharacteristicExpired'
  end
end
