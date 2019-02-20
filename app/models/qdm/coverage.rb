module QDM
  # app/models/qdm/coverage.rb
  class Coverage < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :network
    field :benefit
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
