module QDM
  # app/models/qdm/official.rb
  class Official < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authority
    field :status
    field :date
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
