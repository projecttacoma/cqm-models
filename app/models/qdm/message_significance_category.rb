module QDM
  # app/models/qdm/message_significance_category.rb
  class MessageSignificanceCategory < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
