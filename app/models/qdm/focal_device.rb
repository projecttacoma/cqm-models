module QDM
  # app/models/qdm/focal_device.rb
  class FocalDevice < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :action
    field :manipulated
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
