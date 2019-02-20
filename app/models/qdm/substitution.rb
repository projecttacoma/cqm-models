module QDM
  # app/models/qdm/substitution.rb
  class Substitution < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :allowed
    field :reason
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
