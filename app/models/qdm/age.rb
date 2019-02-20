module QDM
  # app/models/qdm/age.rb
  class Age < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
