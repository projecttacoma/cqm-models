module QDM
  # app/models/qdm/date_criterion.rb
  class DateCriterion < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :code
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
