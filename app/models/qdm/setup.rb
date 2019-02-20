module QDM
  # app/models/qdm/setup.rb
  class Setup < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :action
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
