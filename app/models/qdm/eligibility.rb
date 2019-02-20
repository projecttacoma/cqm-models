module QDM
  # app/models/qdm/eligibility.rb
  class Eligibility < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :comment
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
