module QDM
  # app/models/qdm/organization.rb
  class Organization < Entity
    include Mongoid::Document
    embedded_in :data_element
    field :organizationType, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.135'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.163'
  end
end
