const mongoose = require('mongoose');

const DependencySchema = mongoose.Schema(
  {
    library_name: String,
    statement_name: String,
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  }
);

const StatementSchema = mongoose.Schema(
  {
    statement_name: String,
    dependencies: [DependencySchema],
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  }
);

const CQLStatementDependencySchema = mongoose.Schema(
  {
    library_name: String,
    statements: [StatementSchema],
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  }
);

module.exports.CQLStatementDependencySchema = CQLStatementDependencySchema;
module.exports.CQLStatementDependency = mongoose.model('cql_statement_dependency', CQLStatementDependencySchema);

module.exports.StatementSchema = StatementSchema;
module.exports.Statement = mongoose.model('statement', StatementSchema);

module.exports.DependencySchema = StatementSchema;
module.exports.Dependency = mongoose.model('dependency', DependencySchema);
