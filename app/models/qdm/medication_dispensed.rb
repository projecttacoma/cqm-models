module QDM
  # app/models/qdm/medication_dispensed.rb
  class MedicationDispensed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :refills, type: Integer
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :frequency, type: QDM::Code
    field :daysSupplied, type: Integer
    field :route, type: QDM::Code
    embeds_many :prescriber, class_name: 'QDM::Entity'
    embeds_many :dispenser, class_name: 'QDM::Entity'
    field :negationRationale, type: QDM::Code
    field :relatedTo, type: Array
    field :qdmTitle, type: String, default: 'Medication, Dispensed'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.49'
    field :qdmCategory, type: String, default: 'medication'
    field :qdmStatus, type: String, default: 'dispensed'
    field :qdmVersion, type: String, default: '5.6'
  end
end
