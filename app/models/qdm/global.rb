module QDM
  # app/models/qdm/global.rb
  class Global < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :profile
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
