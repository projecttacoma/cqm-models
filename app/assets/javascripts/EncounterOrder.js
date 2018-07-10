const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const Any = require('./basetypes/Any');

const [Number, String, Mixed] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Mixed,
];

const EncounterOrderSchema = DataElementSchema({
  authorDatetime: DateTime,
  reason: Mixed,
  facilityLocation: Mixed,
  negationRationale: Mixed,
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.27' },
  category: { type: String, default: 'encounter' },
  qdmStatus: { type: String, default: 'order' },
  qdmVersion: { type: String, default: '5.3' },
  _type: { type: String, default: 'EncounterOrder' },

});

module.exports.EncounterOrderSchema = EncounterOrderSchema;
module.exports.EncounterOrder = mongoose.model('EncounterOrder', EncounterOrderSchema);
