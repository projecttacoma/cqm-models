module QDM
  # app/models/qdm/medication_knowledge.rb
  class MedicationKnowledge < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :status
    field :manufacturer
    field :doseForm
    field :amount
    field :synonym
    field :relatedMedicationKnowledge
    field :associatedMedication
    field :productType
    field :monograph
    field :ingredient
    field :preparationInstruction
    field :intendedRoute
    field :cost
    field :monitoringProgram
    field :administrationGuidelines
    field :medicineClassification
    field :packaging
    field :drugCharacteristic
    field :contraindication
    field :regulatory
    field :kinetics
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
