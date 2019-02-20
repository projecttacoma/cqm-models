module QDM
  # app/models/qdm/subscription_channel_type.rb
  class SubscriptionChannelType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
