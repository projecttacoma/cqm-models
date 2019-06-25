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

const CareGoalSchema = DataElementSchema({
  statusDate: Date,
  relevantPeriod: Interval,
  relatedTo: [],
  targetOutcome: Any,
  performer: Any,
  qdmTitle: { type: String, default: 'Care Goal' },
  hqmfOid: { type: String, default: '2.16.840.1.113883.10.20.28.4.7' },
  qdmCategory: { type: String, default: 'care_goal' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::CareGoal' },

});

module.exports.CareGoalSchema = CareGoalSchema;
class CareGoal extends mongoose.Document {
  constructor(object) {
    super(object, CareGoalSchema);
    this._type = 'QDM::CareGoal';
  }
}

module.exports.CareGoal = CareGoal;

