module QDM
  # app/models/qdm/medication_discharge.rb
  class MedicationDischarge < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :refills, type: Integer
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :frequency, type: QDM::Code
    field :daysSupplied, type: Integer
    field :route, type: QDM::Code
    field :negationRationale, type: QDM::Code
    embeds_many :prescriber, class_name: 'QDM::Entity'
    embeds_many :recorder, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Medication, Discharge'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.48'
    field :qdmCategory, type: String, default: 'medication'
    field :qdmStatus, type: String, default: 'discharge'
    field :qdmVersion, type: String, default: '5.6'
  end
end
