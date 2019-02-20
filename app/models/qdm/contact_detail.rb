module QDM
  # app/models/qdm/contact_detail.rb
  class ContactDetail < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :telecom
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
