module QDM
  # app/models/qdm/other_therapy.rb
  class OtherTherapy < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :therapyRelationshipType
    field :medication
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
