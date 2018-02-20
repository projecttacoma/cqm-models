class QDM::Component < QDM::Datatype
  include Mongoid::Document
  field :code, type: QDM::Code
  field :result
  field :qdm_version, type: String, default: '5.3'
end
