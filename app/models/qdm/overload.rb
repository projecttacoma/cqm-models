module QDM
  # app/models/qdm/overload.rb
  class Overload < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :parameterName
    field :comment
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
