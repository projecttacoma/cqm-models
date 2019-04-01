module QDM
  # app/models/qdm/patient_care_experience.rb
  class PatientCareExperience < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :qdmTitle, type: String, default: 'Patient Care Experience'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.52'
    field :qdmCategory, type: String, default: 'care_experience'
    field :qdmVersion, type: String, default: '5.4'
  end
end
