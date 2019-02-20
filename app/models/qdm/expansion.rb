module QDM
  # app/models/qdm/expansion.rb
  class Expansion < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :hierarchical
    field :paging
    field :incomplete
    field :parameter
    field :textFilter
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
