module QDM
  # app/models/qdm/mitigation.rb
  class Mitigation < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :action
    field :date
    field :author
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
