module QDM
  # app/models/qdm/domain_resource.rb
  class DomainResource < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :text
    field :contained
    field :extension
    field :modifierExtension
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
