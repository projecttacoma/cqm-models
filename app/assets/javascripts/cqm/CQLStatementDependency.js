const mongoose = require('mongoose');

const StatementReferenceSchema = new mongoose.Schema(
  {
    library_name: String,
    statement_name: String,
  }
);

const StatementDependencySchema = new mongoose.Schema(
  {
    statement_name: String,
    dependencies: [StatementReferenceSchema],
  }
);

module.exports.StatementDependencySchema = StatementDependencySchema;
module.exports.StatementDependency = mongoose.model('statement_dependency', StatementDependencySchema);

module.exports.StatementReferenceSchema = StatementReferenceSchema;
module.exports.StatementReference = mongoose.model('statement_reference', StatementReferenceSchema);
