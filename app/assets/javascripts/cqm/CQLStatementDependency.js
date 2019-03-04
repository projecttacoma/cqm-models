const mongoose = require('mongoose/browser');

const StatementReferenceSchema = new mongoose.Schema({
  library_name: String,
  statement_name: String,
  hqmf_id: String,
});

const StatementDependencySchema = new mongoose.Schema({
  statement_name: String,
  statement_references: [StatementReferenceSchema],
});

module.exports.StatementReferenceSchema = StatementReferenceSchema;
class StatementReference extends mongoose.Document {
  constructor(object) {
    super(object, StatementReferenceSchema);
  }
}
module.exports.StatementReference = StatementReference;

module.exports.StatementDependencySchema = StatementDependencySchema;
class StatementDependency extends mongoose.Document {
  constructor(object) {
    super(object, StatementDependencySchema);
  }
}
module.exports.StatementDependency = StatementDependency;
