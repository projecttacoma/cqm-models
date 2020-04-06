module QDM
  # app/models/qdm/care_partner.rb
  class CarePartner < Entity
    include Mongoid::Document
    embedded_in :data_element
    field :relationship, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.134'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.160'
  end
end
