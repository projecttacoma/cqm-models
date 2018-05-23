const mongoose = require('mongoose');

const CQLLibrarySchema = mongoose.Schema(
  {
    library_id: String,
    cql: String,
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  }
);

module.exports.CQLLibrarySchema = CQLLibrarySchema;
module.exports.CQLLibrary = mongoose.model('cql_library', CQLLibrarySchema);
