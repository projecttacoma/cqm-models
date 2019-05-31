const mongoose = require('mongoose/browser');

const [Number, String, Mixed, ObjectId] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
];

const ClauseResultSchema = mongoose.Schema(
  {
    // Library the clause this result is for is in
    library_name: String,
    // Statment the clause this result is for is in
    statement_name: String,
    // LocalId of the clause this result is for
    localId: String,
    // Final, processed result of raw calculation
    final: String,
    // Raw result of clause calculation
    raw: Mixed
  }
);


module.exports.ClauseResultSchema = ClauseResultSchema;
class ClauseResult extends mongoose.Document {
  constructor(object) {
    super(object, ClauseResultSchema);
  }
}
module.exports.ClauseResult = ClauseResult;
