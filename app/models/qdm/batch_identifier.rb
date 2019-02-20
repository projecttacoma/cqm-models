module QDM
  # app/models/qdm/batch_identifier.rb
  class BatchIdentifier < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :outerPackaging
    field :immediatePackaging
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
