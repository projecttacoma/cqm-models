module QDM
  # app/models/qdm/evidence.rb
  class Evidence < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :detail
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
