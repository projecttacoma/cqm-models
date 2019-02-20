module QDM
  # app/models/qdm/dispense_request.rb
  class DispenseRequest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :initialFill
    field :dispenseQDM::Interval
    field :validityPeriod
    field :numberOfRepeatsAllowed
    field :quantity
    field :expectedSupplyDuration
    field :performer
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
