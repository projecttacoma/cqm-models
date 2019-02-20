module QDM
  # app/models/qdm/unique_id.rb
  class UniqueId < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :value
    field :preferred
    field :comment
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
