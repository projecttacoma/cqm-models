module QDM
  # app/models/qdm/withdrawal_period.rb
  class WithdrawalPeriod < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :tissue
    field :value
    field :supportingInformation
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
