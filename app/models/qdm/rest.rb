module QDM
  # app/models/qdm/rest.rb
  class Rest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :mode
    field :documentation
    field :security
    field :resource
    field :interaction
    field :searchParam
    field :operation
    field :compartment
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
