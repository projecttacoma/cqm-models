module QDM
  # app/models/qdm/medicine_classification.rb
  class MedicineClassification < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :classification
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
