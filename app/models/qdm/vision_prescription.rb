module QDM
  # app/models/qdm/vision_prescription.rb
  class VisionPrescription < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :created
    field :patient
    field :encounter
    field :dateWritten
    field :prescriber
    field :lensSpecification
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
