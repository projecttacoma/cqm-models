module QDM
  # app/models/qdm/include.rb
  class Include < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :system
    field :version
    field :concept
    field :filter
    field :valueSet
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
