module QDM
  # app/models/qdm/human_name.rb
  class HumanName < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :use
    field :text
    field :family
    field :given
    field :prefix
    field :suffix
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
