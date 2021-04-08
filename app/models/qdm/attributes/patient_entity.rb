module QDM
  # app/models/qdm/patient_entity.rb
  class PatientEntity < Entity
    include Mongoid::Document
    embedded_in :data_element
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.136'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.161'
  end
end
