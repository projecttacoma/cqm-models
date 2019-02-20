module QDM
  # app/models/qdm/source.rb
  class Source < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :context
    field :min
    field :max
    field :type
    field :defaultValue
    field :element
    field :listMode
    field :variable
    field :condition
    field :check
    field :logMessage
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
