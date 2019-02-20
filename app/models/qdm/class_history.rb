module QDM
  # app/models/qdm/class_history.rb
  class ClassHistory < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :class
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
