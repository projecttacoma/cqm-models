module QDM
  # app/models/qdm/input.rb
  class Input < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :type
    field :mode
    field :documentation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
