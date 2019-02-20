module QDM
  # app/models/qdm/strand_type.rb
  class StrandType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
