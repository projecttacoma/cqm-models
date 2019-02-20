module QDM
  # app/models/qdm/date_filter.rb
  class DateFilter < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :path
    field :searchParam
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
