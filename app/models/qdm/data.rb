module QDM
  # app/models/qdm/data.rb
  class Data < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :meaning
    field :reference
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
