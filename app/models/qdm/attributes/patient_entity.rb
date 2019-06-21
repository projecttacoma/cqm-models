module QDM
  # app/models/qdm/patient_entity.rb
  class PatientEntity < Entity
    include Mongoid::Document
    field :qdmVersion, type: String, default: '5.5'
  end
end
