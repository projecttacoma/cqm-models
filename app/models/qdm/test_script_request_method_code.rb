module QDM
  # app/models/qdm/test_script_request_method_code.rb
  class TestScriptRequestMethodCode < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
