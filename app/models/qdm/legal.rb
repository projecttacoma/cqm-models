module QDM
  # app/models/qdm/legal.rb
  class Legal < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :content
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
