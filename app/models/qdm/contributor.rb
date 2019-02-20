module QDM
  # app/models/qdm/contributor.rb
  class Contributor < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :name
    field :contact
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
