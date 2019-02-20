module QDM
  # app/models/qdm/arm.rb
  class Arm < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :type
    field :description
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
