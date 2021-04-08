module QDM
  # app/models/qdm/substance_order.rb
  class SubstanceOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :reason, type: QDM::Code
    field :dosage, type: QDM::Quantity
    field :supply, type: QDM::Quantity
    field :frequency, type: QDM::Code
    field :refills, type: Integer
    field :route, type: QDM::Code
    field :negationRationale, type: QDM::Code
    embeds_many :requester, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Substance, Order'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.77'
    field :qdmCategory, type: String, default: 'substance'
    field :qdmStatus, type: String, default: 'order'
    field :qdmVersion, type: String, default: '5.6'
  end
end
