module QDM
  # app/models/qdm/procedure.rb
  class Procedure < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :sequence
    field :type
    field :date
    field :procedure
    field :udi
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
