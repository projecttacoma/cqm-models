module QDM
  # app/models/qdm/type_tested.rb
  class TypeTested < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :isDerived
    field :type
    field :preference
    field :container
    field :requirement
    field :retentionTime
    field :rejectionCriterion
    field :handling
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
