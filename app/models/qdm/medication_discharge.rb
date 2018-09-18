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
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.48'
    field :qdmVersion, type: String, default: '5.4'
  end
end
