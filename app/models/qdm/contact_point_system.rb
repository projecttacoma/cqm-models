module QDM
  # app/models/qdm/contact_point_system.rb
  class ContactPointSystem < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
