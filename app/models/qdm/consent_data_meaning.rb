module QDM
  # app/models/qdm/consent_data_meaning.rb
  class ConsentDataMeaning < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
