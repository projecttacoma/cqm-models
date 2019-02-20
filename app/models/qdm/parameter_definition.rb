module QDM
  # app/models/qdm/parameter_definition.rb
  class ParameterDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :use
    field :min
    field :max
    field :documentation
    field :type
    field :profile
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
