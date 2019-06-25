const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./Identifier');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const Date = require('./basetypes/Date');
const Any = require('./basetypes/Any');
const { ComponentSchema } = require('./attributes/Component');
const { FacilityLocationSchema } = require('./attributes/FacilityLocation');
const { DiagnosisComponentSchema } = require('./attributes/DiagnosisComponent');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const CommunicationPerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  category: Code,
  medium: Code,
  sender: Any,
  recipient: Any,
  relatedTo: [],
  sentDatetime: DateTime,
  receivedDatetime: DateTime,
  negationRationale: Code,
  qdmTitle: { type: String, default: 'Communication, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.132' },
  qdmCategory: { type: String, default: 'communication' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.5' },
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

