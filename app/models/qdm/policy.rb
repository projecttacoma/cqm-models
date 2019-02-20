module QDM
  # app/models/qdm/policy.rb
  class Policy < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authority
    field :uri
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
