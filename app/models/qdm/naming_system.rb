module QDM
  # app/models/qdm/naming_system.rb
  class NamingSystem < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :status
    field :kind
    field :date
    field :publisher
    field :contact
    field :responsible
    field :type
    field :description
    field :useContext
    field :jurisdiction
    field :usage
    field :uniqueId
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
