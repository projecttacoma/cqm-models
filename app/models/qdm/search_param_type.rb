module QDM
  # app/models/qdm/search_param_type.rb
  class SearchParamType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
