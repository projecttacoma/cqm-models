module QDM
  # app/models/qdm/practitioner.rb
  class Practitioner < Entity
    include Mongoid::Document
    field :role, type: QDM::Code
    field :specialty, type: QDM::Code
    field :qualification, type: QDM::Code
    field :qdmVersion, type: String, default: '5.5'
  end
end
