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

const RelatedPersonSchema = DataElementSchema({
  identifier: IdentifierSchema,
  linkedPatientId: String,
  qdmTitle: { type: String, default: 'Related Person' },
  qdmVersion: { type: String, default: '5.5' },
  _type: { type: String, default: 'QDM::RelatedPerson' },

});

module.exports.RelatedPersonSchema = RelatedPersonSchema;
class RelatedPerson extends mongoose.Document {
  constructor(object) {
    super(object, RelatedPersonSchema);
    this._type = 'QDM::RelatedPerson';
  }
}

module.exports.RelatedPerson = RelatedPerson;

