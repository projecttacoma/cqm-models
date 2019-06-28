const mongoose = require('mongoose/browser');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const IdentifierSchema = mongoose.Schema({
  namingSystem: String,
  value: String,
  qdmVersion: { type: String, default: '5.5' },

}, { _id: false, id: false });

module.exports.IdentifierSchema = IdentifierSchema;
class Identifier extends mongoose.Document {
  constructor(object) {
    super(object, IdentifierSchema);
  }
}
module.exports.Identifier = Identifier;
