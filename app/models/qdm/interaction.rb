module QDM
  # app/models/qdm/interaction.rb
  class Interaction < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :documentation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
