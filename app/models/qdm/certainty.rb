module QDM
  # app/models/qdm/certainty.rb
  class Certainty < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :rating
    field :note
    field :certaintySubcomponent
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
