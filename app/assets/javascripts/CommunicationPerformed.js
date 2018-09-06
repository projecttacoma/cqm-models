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

const CommunicationPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  category: Code,
  medium: Code,
  sender: Code,
  recipient: Code,
  relatedTo: [IdSchema],
  relevantPeriod: Interval,
  negationRationale: Code,
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'CommunicationPerformed' },

});

module.exports.CommunicationPerformedSchema = CommunicationPerformedSchema;
module.exports.CommunicationPerformed = mongoose.model('CommunicationPerformed', CommunicationPerformedSchema);
