module QDM
  # app/models/qdm/data_requirement.rb
  class DataRequirement < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :profile
    field :subject
    field :mustSupport
    field :codeFilter
    field :dateFilter
    field :limit
    field :sort
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
