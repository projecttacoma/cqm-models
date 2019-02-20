module QDM
  # app/models/qdm/name_part.rb
  class NamePart < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :part
    field :type
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
