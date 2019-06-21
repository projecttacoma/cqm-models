module QDM
  # app/models/qdm/diagnosis_component.rb
  class DiagnosisComponent < Attribute
    include Mongoid::Document
    field :code, type: QDM::Code
    field :presentOnAdmissionIndicator, type: QDM::Code
    field :rank, type: Integer
    field :qdmVersion, type: String, default: '5.5'
  end
end
