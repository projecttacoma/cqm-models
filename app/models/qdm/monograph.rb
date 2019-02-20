module QDM
  # app/models/qdm/monograph.rb
  class Monograph < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :source
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
