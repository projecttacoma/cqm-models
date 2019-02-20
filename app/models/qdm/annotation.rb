module QDM
  # app/models/qdm/annotation.rb
  class Annotation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author
    field :time
    field :text
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
