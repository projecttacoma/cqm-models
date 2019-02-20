module QDM
  # app/models/qdm/supplemental_data.rb
  class SupplementalData < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :usage
    field :description
    field :criteria
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
