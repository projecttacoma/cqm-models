module QDM
  # app/models/qdm/contact.rb
  class Contact < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :purpose
    field :name
    field :telecom
    field :address
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
