const mongoose = require('mongoose/browser');

const Code = require('../basetypes/Code');
const Interval = require('../basetypes/Interval');
const Quantity = require('../basetypes/Quantity');
const DateTime = require('../basetypes/DateTime');
const QDMDate = require('../basetypes/QDMDate');
const Any = require('../basetypes/Any');

const [Schema] = [mongoose.Schema];

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ComponentSchema = new mongoose.Schema({
  code: Code,
  result: Any,
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::Component' },

});

module.exports.ComponentSchema = ComponentSchema;
class Component extends mongoose.Document {
  constructor(object) {
    super(object, ComponentSchema);
    this._type = 'QDM::Component';
  }
}

function ComponentSchemaFunction(add, options) {
  const extended = new Schema({
    code: Code,
    result: Any,
    qdmVersion: { type: String, default: '5.6' },
    _type: { type: String, default: 'QDM::Component' },


  }, options);

  if (add) {
    extended.add(add);
  }

  return extended;
}

module.exports.Component = Component;
module.exports.ComponentSchemaFunction = ComponentSchemaFunction;
