module QDM
  # app/models/qdm/issue.rb
  class Issue < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :severity
    field :code
    field :details
    field :diagnostics
    field :location
    field :expression
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
