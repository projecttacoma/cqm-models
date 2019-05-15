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

const CommunicationPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  category: Code,
  medium: Code,
  sender: Code,
  recipient: Code,
  relatedTo: [IdSchema],
  relevantPeriod: Interval,
  negationRationale: Code,
  qdmTitle: { type: String, default: 'Communication, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.132' },
  qdmCategory: { type: String, default: 'communication' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'QDM::CommunicationPerformed' },

});

module.exports.CommunicationPerformedSchema = CommunicationPerformedSchema;
class CommunicationPerformed extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationPerformedSchema);
    this._type = 'QDM::CommunicationPerformed';
  }
}
module.exports.CommunicationPerformed = CommunicationPerformed;
