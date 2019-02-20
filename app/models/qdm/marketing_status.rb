module QDM
  # app/models/qdm/marketing_status.rb
  class MarketingStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :country
    field :jurisdiction
    field :status
    field :dateRange
    field :restoreDate
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
