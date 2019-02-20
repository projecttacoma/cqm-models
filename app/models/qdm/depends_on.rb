module QDM
  # app/models/qdm/depends_on.rb
  class DependsOn < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :property
    field :system
    field :value
    field :display
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
