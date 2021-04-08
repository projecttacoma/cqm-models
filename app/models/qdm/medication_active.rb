module QDM
  # app/models/qdm/medication_active.rb
  class MedicationActive < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :relevantDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :dosage, type: QDM::Quantity
    field :frequency, type: QDM::Code
    field :route, type: QDM::Code
    embeds_many :recorder, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Medication, Active'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.44'
    field :qdmCategory, type: String, default: 'medication'
    field :qdmStatus, type: String, default: 'active'
    field :qdmVersion, type: String, default: '5.6'
  end
end
