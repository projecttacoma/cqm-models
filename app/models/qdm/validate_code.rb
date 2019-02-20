module QDM
  # app/models/qdm/validate_code.rb
  class ValidateCode < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :translations
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
