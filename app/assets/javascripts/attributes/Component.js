const mongoose = require('mongoose/browser');

const Code = require('../basetypes/Code');
const Interval = require('../basetypes/Interval');
const Quantity = require('../basetypes/Quantity');
const DateTime = require('../basetypes/DateTime');
const Any = require('../basetypes/Any');



const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ComponentSchema = new mongoose.Schema({
  code: Code,
  result: Any,
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'Component' },

});

module.exports.ComponentSchema = ComponentSchema;
class Component extends mongoose.Document {
  constructor(object) {
    super(object, ComponentSchema);
  }
}
module.exports.Component = Component;
