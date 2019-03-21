const mongoose = require('mongoose/browser');

const { IdSchema } = require('./Id');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');


const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];
const AdverseEventSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantPeriod: Interval,
  severity: Code,
  facilityLocation: FacilityLocationSchema,
  type: Code,
  hqmfTitle: { type: String, default: 'Adverse Event' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.3.120' },
  qdmCategory: { type: String, default: 'adverse_event' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'AdverseEvent' },

});
module.exports.AdverseEventSchema = AdverseEventSchema;
class AdverseEvent extends mongoose.Document {
  constructor(object) {
    super(object, AdverseEventSchema);
  }
}
module.exports.AdverseEvent = AdverseEvent;
