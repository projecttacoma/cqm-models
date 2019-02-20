module QDM
  # app/models/qdm/focus.rb
  class Focus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :profile
    field :min
    field :max
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
