module QDM
  # app/models/qdm/lens_specification.rb
  class LensSpecification < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :product
    field :eye
    field :sphere
    field :cylinder
    field :axis
    field :prism
    field :add
    field :power
    field :backCurve
    field :diameter
    field :duration
    field :color
    field :brand
    field :note
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
