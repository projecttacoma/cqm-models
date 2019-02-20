module QDM
  # app/models/qdm/type_restful_interaction.rb
  class TypeRestfulInteraction < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
