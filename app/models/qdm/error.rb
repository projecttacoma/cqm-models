module QDM
  # app/models/qdm/error.rb
  class Error < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :itemSequence
    field :detailSequence
    field :subDetailSequence
    field :code
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
