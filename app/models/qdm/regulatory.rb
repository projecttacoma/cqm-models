module QDM
  # app/models/qdm/regulatory.rb
  class Regulatory < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :regulatoryAuthority
    field :substitution
    field :schedule
    field :maxDispense
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
