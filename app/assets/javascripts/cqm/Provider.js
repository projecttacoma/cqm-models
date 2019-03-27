const mongoose = require('mongoose/browser');
const Id = require('../Id');

const [Schema, String, Boolean] = [
  mongoose.Schema,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AddressSchema = new mongoose.Schema({
  street: [String],
  city: String,
  state: String,
  zip: String,
  country: String,
  use: String,
});

const TelecomSchema = new mongoose.Schema({
  use: String,
  value: String,
  preferred: Boolean,
});

const ProviderSchema = new Schema({
  _type: { type: String, default: 'Provider' },

  givenNames: [String],
  familyName: String,
  specialty: String,
  title: String,
  addresses: [AddressSchema],
  telecoms: [TelecomSchema],
  ids: [Id.IdSchema],

}, { id: false });

module.exports.ProviderSchema = ProviderSchema;
class Provider extends mongoose.Document {
  constructor(object) {
    super(object, ProviderSchema);
  }
}
module.exports.Provider = Provider;
