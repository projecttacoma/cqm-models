const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const IdSchema = DataElementSchema({
  naming_system: String,
  value: String,
  qdm_version: { type: String, default: '5.3' },
  _type: { type: String, default: 'Id' },

});

module.exports.IdSchema = IdSchema;
module.exports.Id = mongoose.model('Id', IdSchema);
