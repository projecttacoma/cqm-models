module QDM
  # app/models/qdm/subscription_status.rb
  class SubscriptionStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
