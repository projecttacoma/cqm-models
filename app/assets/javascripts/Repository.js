const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const RepositorySchema = DataElementSchema({
  type: Any,
  url: Any,
  name: Any,
  datasetId: Any,
  variantsetId: Any,
  readsetId: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'Repository' },

});

module.exports.RepositorySchema = RepositorySchema;
module.exports.Repository = mongoose.model('Repository', RepositorySchema);
