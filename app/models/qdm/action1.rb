module QDM
  # app/models/qdm/action1.rb
  class Action1 < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :operation
    field :assert
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
