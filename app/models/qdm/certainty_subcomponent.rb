module QDM
  # app/models/qdm/certainty_subcomponent.rb
  class CertaintySubcomponent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :rating
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
