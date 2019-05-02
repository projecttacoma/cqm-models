const mongoose = require('mongoose/browser');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const IdSchema = mongoose.Schema({
  namingSystem: String,
  value: String,
  qdmVersion: { type: String, default: '5.4' },

}, { _id: false, id: false });

module.exports.IdSchema = IdSchema;
class Id extends mongoose.Document {
  constructor(object) {
    super(object, IdSchema);
  }
}
module.exports.Id = Id;
