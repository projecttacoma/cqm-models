module QDM
  # app/models/qdm/composition_status.rb
  class CompositionStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
