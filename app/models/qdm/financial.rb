module QDM
  # app/models/qdm/financial.rb
  class Financial < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :allowed
    field :used
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
