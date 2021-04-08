const mongoose = require('mongoose/browser');

const { IdentifierSchema } = require('./Identifier');
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

const EntitySchema = new mongoose.Schema({
  id: String,
  identifier: IdentifierSchema,
  qdmVersion: { type: String, default: '5.6' },
  _type: { type: String, default: 'QDM::Entity' },

});

module.exports.EntitySchema = EntitySchema;
class Entity extends mongoose.Document {
  constructor(object) {
    super(object, EntitySchema);
    this._type = 'QDM::Entity';
  }
}

function EntitySchemaFunction(add, options) {
  const extended = new Schema({
    identifier: IdentifierSchema,
    qdmVersion: { type: String, default: '5.6' },
    _type: { type: String, default: 'QDM::Entity' },


    id: {
      type: String,
      default() {
        return this._id ? this._id.toString() : mongoose.Types.ObjectId().toString();
      },
    },

  }, options);

  if (add) {
    extended.add(add);
  }

  return extended;
}

module.exports.Entity = Entity;
module.exports.EntitySchemaFunction = EntitySchemaFunction;
