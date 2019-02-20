module QDM
  # app/models/qdm/class.rb
  class Class < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :value
    field :name
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
