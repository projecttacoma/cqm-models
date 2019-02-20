module QDM
  # app/models/qdm/country_language.rb
  class CountryLanguage < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :country
    field :jurisdiction
    field :language
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
