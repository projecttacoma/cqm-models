module QDM
  # app/models/qdm/test_report.rb
  class TestReport < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :name
    field :status
    field :testScript
    field :result
    field :score
    field :tester
    field :issued
    field :participant
    field :setup
    field :test
    field :teardown
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
