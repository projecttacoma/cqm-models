module QDM
  # app/models/qdm/code_search_support.rb
  class CodeSearchSupport < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
