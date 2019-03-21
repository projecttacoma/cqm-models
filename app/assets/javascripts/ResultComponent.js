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
const ResultComponentSchema = DataElementSchema({
  referenceRange: Interval,
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'ResultComponent' },

});
module.exports.ResultComponentSchema = ResultComponentSchema;
class ResultComponent extends mongoose.Document {
  constructor(object) {
    super(object, ResultComponentSchema);
  }
}
module.exports.ResultComponent = ResultComponent;
