module QDM
  # app/models/qdm/assert.rb
  class Assert < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :label
    field :description
    field :direction
    field :compareToSourceId
    field :compareToSourceExpression
    field :compareToSourcePath
    field :contentType
    field :expression
    field :headerField
    field :minimumId
    field :navigationLinks
    field :operator
    field :path
    field :requestMethod
    field :requestURL
    field :resource
    field :response
    field :responseQDM::Code
    field :sourceId
    field :validateProfileId
    field :value
    field :warningOnly
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
