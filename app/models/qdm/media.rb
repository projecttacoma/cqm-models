module QDM
  # app/models/qdm/media.rb
  class Media < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :basedOn
    field :partOf
    field :status
    field :type
    field :modality
    field :view
    field :subject
    field :encounter
    field :created
    field :issued
    field :operator
    field :reasonQDM::Code
    field :bodySite
    field :deviceName
    field :device
    field :height
    field :width
    field :frames
    field :duration
    field :content
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
