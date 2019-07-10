module QDM
  # app/models/qdm/patient_entity.rb
  class PatientEntity < Entity
    include Mongoid::Document
    embedded_in :data_element
    field :qdmVersion, type: String, default: '5.5'
  end
end
