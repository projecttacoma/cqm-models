module QDM
  # app/models/qdm/specimen_contained_preference.rb
  class SpecimenContainedPreference < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
