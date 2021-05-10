const mongoose = require('mongoose/browser');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const IdentifierSchema = mongoose.Schema({
  namingSystem: String,
  value: String,
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::Identifier' },

}, { _id: false, id: false });

module.exports.IdentifierSchema = IdentifierSchema;
class Identifier extends mongoose.Document {
  constructor(object) {
    super(object, IdentifierSchema);
    this._type = 'QDM::Identifier';
  }
}
module.exports.Identifier = Identifier;
