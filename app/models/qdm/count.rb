module QDM
  # app/models/qdm/count.rb
  class Count < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
