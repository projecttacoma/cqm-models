module QDM
  # app/models/qdm/basic.rb
  class Basic < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :code
    field :subject
    field :created
    field :author
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
