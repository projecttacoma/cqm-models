module QDM
  # app/models/qdm/slot.rb
  class Slot < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :serviceCategory
    field :serviceType
    field :specialty
    field :appointmentType
    field :schedule
    field :status
    field :start
    field :end
    field :overbooked
    field :comment
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
