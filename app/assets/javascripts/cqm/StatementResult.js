const mongoose = require('mongoose/browser');

const [String, Mixed] = [
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
];

const StatementResultSchema = mongoose.Schema({
  // Library the statement this result is for is in
  library_name: String,
  // Statement this result is for is in
  statement_name: String,
  // Result, processed for display, of the statement this result is for
  pretty: String,
  // Final, processed result of raw calculation
  final: String,
  // Raw result of clause calculation
  raw: Mixed,
  /*
   * 'NA' - Not applicable. This statement is not relevant to any population calculation in this population_set. Common
   *   for unused library statements or statements only used for other population sets.
   *
   * 'FALSE' - This statement is not relevant to any of this patient's population inclusion calculations.
   *
   * 'TRUE' - This statement is relevant for one or more of the population inclusion calculations.
    */
  relevance: {
    type: String,
    enum: ['NA', 'TRUE', 'FALSE'],
    default: 'NA',
  },
});


module.exports.StatementResultSchema = StatementResultSchema;
class StatementResult extends mongoose.Document {
  constructor(object) {
    super(object, StatementResultSchema);
  }
}
module.exports.StatementResult = StatementResult;
