const mongoose = require('mongoose/browser');

const { ComponentSchemaFunction } = require('./Component');
const Code = require('../basetypes/Code');
const Interval = require('../basetypes/Interval');
const Quantity = require('../basetypes/Quantity');
const DateTime = require('../basetypes/DateTime');
const QDMDate = require('../basetypes/QDMDate');
const Any = require('../basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ResultComponentSchema = ComponentSchemaFunction({
  referenceRange: Interval,
  _type: { type: String, default: 'QDM::ResultComponent' },

});

module.exports.ResultComponentSchema = ResultComponentSchema;
class ResultComponent extends mongoose.Document {
  constructor(object) {
    super(object, ResultComponentSchema);
    this._type = 'QDM::ResultComponent';
  }
}

module.exports.ResultComponent = ResultComponent;

