module QDM
  # app/models/qdm/benefit.rb
  class Benefit < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :requirement
    field :limit
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
