module QDM
  # app/models/qdm/code_filter.rb
  class CodeFilter < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :path
    field :searchParam
    field :valueSet
    field :code
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
