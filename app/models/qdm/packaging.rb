module QDM
  # app/models/qdm/packaging.rb
  class Packaging < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :quantity
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
