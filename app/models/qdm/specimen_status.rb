module QDM
  # app/models/qdm/specimen_status.rb
  class SpecimenStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
