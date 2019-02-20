module QDM
  # app/models/qdm/dosage.rb
  class Dosage < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :dosage
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
