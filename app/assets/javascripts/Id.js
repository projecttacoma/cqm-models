const mongoose = require('mongoose');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const IdSchema = mongoose.Schema({
  namingSystem: String,
  value: String,
  qdmVersion: { type: String, default: '5.4' },
  _type: { type: String, default: 'Id' },

}, { _id: false, id: false });

module.exports.IdSchema = IdSchema;
