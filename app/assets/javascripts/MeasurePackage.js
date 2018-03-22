const mongoose = require('mongoose');

const [MongoBuffer, ObjectId] = [
  mongoose.Schema.Types.Buffer,
  mongoose.Schema.Types.ObjectId,
];

const MeasurePackageSchema = mongoose.Schema(
  {
    file: MongoBuffer,
    measure: { type: ObjectId, ref: 'Measure' },
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

module.exports.MeasurePackageSchema = MeasurePackageSchema;
module.exports.MeasurePackage = mongoose.model('measure_package', MeasurePackageSchema);
