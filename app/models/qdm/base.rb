module QDM
  # app/models/qdm/base.rb
  class Base < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :path
    field :min
    field :max
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
