module QDM
  # app/models/qdm/issue_type.rb
  class IssueType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
