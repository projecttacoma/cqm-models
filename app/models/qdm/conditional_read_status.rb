module QDM
  # app/models/qdm/conditional_read_status.rb
  class ConditionalReadStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
