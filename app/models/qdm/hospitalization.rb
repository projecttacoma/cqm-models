module QDM
  # app/models/qdm/hospitalization.rb
  class Hospitalization < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :preAdmissionIdentifier
    field :origin
    field :admitSource
    field :reAdmission
    field :dietPreference
    field :specialCourtesy
    field :specialArrangement
    field :destination
    field :dischargeDisposition
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
