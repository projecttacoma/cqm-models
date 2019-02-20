module QDM
  # app/models/qdm/medicinal_product_interaction.rb
  class MedicinalProductInteraction < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :subject
    field :description
    field :interactant
    field :type
    field :effect
    field :incidence
    field :management
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
