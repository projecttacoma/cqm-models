module QDM
  # app/models/qdm/inner.rb
  class Inner < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :start
    field :end
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
