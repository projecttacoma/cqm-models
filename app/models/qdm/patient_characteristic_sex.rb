class QDM::PatientCharacteristicSex < QDM::Datatype
  include Mongoid::Document
  field :qdm_version, type: String, default: '5.3'
end
