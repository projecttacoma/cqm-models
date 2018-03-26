class MeasurePackage
  include Mongoid::Document
  include Mongoid::Timestamps

  field :file, type: BSON::Binary
  belongs_to :measure, class_name: "Measure", inverse_of: :package
end