module QDM
  # app/models/qdm/coding.rb
  class Coding < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :system
    field :version
    field :code
    field :display
    field :userSelected
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
