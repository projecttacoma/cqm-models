module QDM
  # app/models/qdm/filter.rb
  class Filter < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :op
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
