module QDM
  # app/models/qdm/contains.rb
  class Contains < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :system
    field :abstract
    field :inactive
    field :version
    field :code
    field :display
    field :designation
    field :contains
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
