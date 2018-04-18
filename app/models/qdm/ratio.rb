module QDM
  # app/models/qdm/ratio.rb
  class Ratio < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :numerator, type: QDM::Quantity
    field :denominator, type: QDM::Quantity
    field :qdmVersion, type: String, default: '5.3'
  end
end
