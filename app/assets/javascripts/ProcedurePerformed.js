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

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ProcedurePerformedSchema = DataElementSchema({
  authorDatetime: DateTime,
  relevantDatetime: DateTime,
  relevantPeriod: Interval,
  reason: Code,
  method: Code,
  result: Any,
  status: Code,
  anatomicalLocationSite: Code,
  rank: Number,
  priority: Code,
  incisionDatetime: DateTime,
  negationRationale: Code,
  components: [ComponentSchema],
  performer: Any,
  qdmTitle: { type: String, default: 'Procedure, Performed' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.67' },
  qdmCategory: { type: String, default: 'procedure' },
  qdmStatus: { type: String, default: 'performed' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::ProcedurePerformed' },

});

module.exports.ProcedurePerformedSchema = ProcedurePerformedSchema;
class ProcedurePerformed extends mongoose.Document {
  constructor(object) {
    super(object, ProcedurePerformedSchema);
    this._type = 'QDM::ProcedurePerformed';
  }
}

module.exports.ProcedurePerformed = ProcedurePerformed;

