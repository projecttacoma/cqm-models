module QDM
  # app/models/qdm/security_label.rb
  class SecurityLabel < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :number
    field :classification
    field :category
    field :control
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
