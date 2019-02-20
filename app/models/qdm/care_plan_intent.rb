module QDM
  # app/models/qdm/care_plan_intent.rb
  class CarePlanIntent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
