module QDM
  # app/models/qdm/compartment_type.rb
  class CompartmentType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
