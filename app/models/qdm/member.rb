module QDM
  # app/models/qdm/member.rb
  class Member < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :entity
    field :period
    field :inactive
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
