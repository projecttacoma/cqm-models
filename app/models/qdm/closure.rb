module QDM
  # app/models/qdm/closure.rb
  class Closure < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :translation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
