module QDM
  # app/models/qdm/name.rb
  class Name < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :type
    field :status
    field :preferred
    field :language
    field :domain
    field :jurisdiction
    field :synonym
    field :translation
    field :official
    field :source
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
