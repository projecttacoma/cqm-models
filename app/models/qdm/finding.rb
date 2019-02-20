module QDM
  # app/models/qdm/finding.rb
  class Finding < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :itemQDM::CodeableConcept
    field :itemReference
    field :basis
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
