module QDM
  # app/models/qdm/usage_context.rb
  class UsageContext < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
