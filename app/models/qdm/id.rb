module QDM
  # app/models/qdm/id.rb
  class Id < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :naming_system, type: String
    field :value, type: String
    field :qdm_version, type: String, default: '5.3'
  end
end
