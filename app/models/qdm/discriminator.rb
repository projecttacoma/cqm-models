module QDM
  # app/models/qdm/discriminator.rb
  class Discriminator < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :path
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
