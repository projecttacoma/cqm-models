class QDM::PatientCharacteristicSex < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :qdm_version, type: String, default: '5.3'
end
