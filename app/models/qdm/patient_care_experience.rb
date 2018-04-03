module QDM
  # app/models/qdm/patient_care_experience.rb
  class PatientCareExperience < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.52'
    field :category, type: String, default: 'care_experience'
    field :qdm_version, type: String, default: '5.3'
    field :class_name, type: String, default: 'PatientCareExperience'
  end
end
