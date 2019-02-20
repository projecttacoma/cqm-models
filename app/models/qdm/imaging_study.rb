module QDM
  # app/models/qdm/imaging_study.rb
  class ImagingStudy < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :modality
    field :subject
    field :encounter
    field :started
    field :basedOn
    field :referrer
    field :interpreter
    field :endpoint
    field :numberOfSeries
    field :numberOfInstances
    field :procedureReference
    field :procedureQDM::Code
    field :location
    field :reasonQDM::Code
    field :reasonReference
    field :note
    field :description
    field :series
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
