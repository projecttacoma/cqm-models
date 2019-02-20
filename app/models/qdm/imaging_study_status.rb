module QDM
  # app/models/qdm/imaging_study_status.rb
  class ImagingStudyStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
