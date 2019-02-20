module QDM
  # app/models/qdm/system_restful_interaction.rb
  class SystemRestfulInteraction < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
