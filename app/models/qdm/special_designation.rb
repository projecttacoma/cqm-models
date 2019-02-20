module QDM
  # app/models/qdm/special_designation.rb
  class SpecialDesignation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :type
    field :intendedUse
    field :indication
    field :status
    field :date
    field :species
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
