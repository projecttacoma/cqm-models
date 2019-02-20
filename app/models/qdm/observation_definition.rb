module QDM
  # app/models/qdm/observation_definition.rb
  class ObservationDefinition < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :category
    field :code
    field :identifier
    field :permittedDataType
    field :multipleResultsAllowed
    field :method
    field :preferredReportName
    field :quantitativeDetails
    field :qualifiedQDM::Interval
    field :validQDM::CodedValueSet
    field :normalQDM::CodedValueSet
    field :abnormalQDM::CodedValueSet
    field :criticalQDM::CodedValueSet
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
