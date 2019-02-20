module QDM
  # app/models/qdm/search_param.rb
  class SearchParam < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :name
    field :definition
    field :type
    field :documentation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
