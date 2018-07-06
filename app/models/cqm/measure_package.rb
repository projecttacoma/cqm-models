module CQM
  # MeasurePackage stores the uploaded file for a given Measure, so it can be recreated if need be
  class MeasurePackage
    include Mongoid::Document
    include Mongoid::Timestamps

    field :file, type: BSON::Binary
    belongs_to :measure, class_name: 'CQM::Measure', inverse_of: :package
  end
end
