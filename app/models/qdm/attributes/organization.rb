module QDM
  # app/models/qdm/organization.rb
  class Organization < Entity
    include Mongoid::Document
    embedded_in :patient
    field :type, type: QDM::Code
    field :qdmVersion, type: String, default: '5.5'
  end
end