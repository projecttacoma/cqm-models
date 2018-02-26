class QDM::Component < QDM::DataElement
  include Mongoid::Document
  embedded_in :patient
  field :code, type: QDM::Code
  field :result
  field :qdm_version, type: String, default: '5.3'
end
