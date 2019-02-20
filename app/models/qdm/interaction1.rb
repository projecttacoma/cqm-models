module QDM
  # app/models/qdm/interaction1.rb
  class Interaction1 < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :documentation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
