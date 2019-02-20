module QDM
  # app/models/qdm/isotope.rb
  class Isotope < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :name
    field :substitution
    field :halfLife
    field :molecularWeight
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
