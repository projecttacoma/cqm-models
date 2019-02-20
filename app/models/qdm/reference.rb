module QDM
  # app/models/qdm/reference.rb
  class Reference < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :reference
    field :type
    field :identifier
    field :display
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
