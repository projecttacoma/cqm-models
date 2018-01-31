class QDM::Id
  include Mongoid::Document
  field :naming_system, type: String
  field :value, type: String
  field :qdm_version, type: String, default: '5.3'
end
