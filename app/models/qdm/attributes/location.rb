module QDM
  # app/models/qdm/location.rb
  class Location < Entity
    include Mongoid::Document
    embedded_in :data_element
    field :locationType, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.142'
  end
end
