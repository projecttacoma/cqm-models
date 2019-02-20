module QDM
  # app/models/qdm/exception.rb
  class Exception < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
