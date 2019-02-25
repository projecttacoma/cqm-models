const mongoose = require('mongoose/browser');

// using mBuffer to not conflict with system Buffer
const [mBuffer, ObjectId] = [
  mongoose.Schema.Types.Buffer,
  mongoose.Schema.Types.ObjectId,
];

const MeasurePackageSchema = new mongoose.Schema(
  {
    file: mBuffer,
    measure: { type: ObjectId, ref: 'Measure' },
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports.MeasurePackageSchema = MeasurePackageSchema;
class MeasurePackage extends mongoose.Document {
  constructor(object) {
    super(object, MeasurePackageSchema);
  }
}
module.exports.MeasurePackage = MeasurePackage;
