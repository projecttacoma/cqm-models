module QDM
  # app/models/qdm/ratio.rb
  class Ratio < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :numerator
    field :denominator
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
