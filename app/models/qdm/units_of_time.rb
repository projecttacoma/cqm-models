module QDM
  # app/models/qdm/units_of_time.rb
  class UnitsOfTime < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
