module QDM
  # app/models/qdm/medication_administered.rb
  class MedicationAdministered < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :dosage, type: QDM::Quantity
    field :frequency, type: QDM::Code
    field :route, type: QDM::Code
    field :reason, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.45'
    field :qdmVersion, type: String, default: '5.4'
  end
end
