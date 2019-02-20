module QDM
  # app/models/qdm/subscription.rb
  class Subscription < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :status
    field :contact
    field :end
    field :reason
    field :criteria
    field :error
    field :channel
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
