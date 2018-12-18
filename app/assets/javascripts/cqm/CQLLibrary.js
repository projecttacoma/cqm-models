const mongoose = require('mongoose');
const StatementDependencySchema = require('./CQLStatementDependency').StatementDependencySchema

const [Mixed, ObjectId, mDate] = [
  mongoose.Schema.Types.Mixed,
  mongoose.Schema.Types.ObjectId,
  mongoose.Schema.Types.Date,
];

const CQLLibrarySchema = new mongoose.Schema(
  {
    library_name: String,
    library_version: String,
    cql: String,
    elm: Mixed,
    elm_annotations: Mixed,
    is_main_library: { type: Boolean, default: false },
    statement_dependencies: [StatementDependencySchema]
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  }
);

module.exports.CQLLibrarySchema = CQLLibrarySchema;
module.exports.CQLLibrary = mongoose.model('cql_library', CQLLibrarySchema);
