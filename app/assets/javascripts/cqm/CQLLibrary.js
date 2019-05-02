const mongoose = require('mongoose/browser');
const { StatementDependencySchema } = require('./CQLStatementDependency');

const [Mixed, mDate] = [
  mongoose.Schema.Types.Mixed,
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
    is_top_level: { type: Boolean, default: true },
    statement_dependencies: [StatementDependencySchema],
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  }
);

module.exports.CQLLibrarySchema = CQLLibrarySchema;
class CQLLibrary extends mongoose.Document {
  constructor(object) {
    super(object, CQLLibrarySchema);
  }
}
module.exports.CQLLibrary = CQLLibrary;
