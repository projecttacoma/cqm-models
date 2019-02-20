module QDM
  # app/models/qdm/address.rb
  class Address < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :use
    field :type
    field :text
    field :line
    field :city
    field :district
    field :state
    field :postalQDM::Code
    field :country
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
