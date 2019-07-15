module QDM
  # app/models/qdm/care_partner.rb
  class CarePartner < Entity
    include Mongoid::Document
    embedded_in :data_element
    field :relationship, type: QDM::Code
  end
end
