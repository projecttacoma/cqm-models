module QDM
  # app/models/qdm/supporting_info.rb
  class SupportingInfo < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :sequence
    field :information
    field :appliesToAll
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
