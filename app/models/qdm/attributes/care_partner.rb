module QDM
  # app/models/qdm/care_partner.rb
  class CarePartner < Entity
    include Mongoid::Document
    embedded_in :patient
    field :relationship, type: QDM::Code
    field :qdmVersion, type: String, default: '5.5'
  end
end