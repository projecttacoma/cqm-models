module QDM
  # app/models/qdm/fixture.rb
  class Fixture < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :autocreate
    field :autodelete
    field :resource
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
