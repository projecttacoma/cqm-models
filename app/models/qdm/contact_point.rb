module QDM
  # app/models/qdm/contact_point.rb
  class ContactPoint < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :system
    field :value
    field :use
    field :rank
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
