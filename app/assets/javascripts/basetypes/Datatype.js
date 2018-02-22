const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Code = Schema.Types.Code;

function extendSchema(TSchema, definition, options) {
  return new Schema(
    Object.assign({}, TSchema.obj, definition),
    options
  );
}

var DatatypeSchema = new Schema({
  codes: {type: [Code]}
});

// Returns the attribute requested on the datatype.
DatatypeSchema.methods.get = function get(attribute, callback) {
  return this[attribute]();
}

// Returns all of the codes on this datatype.
DatatypeSchema.methods.getCode = function getCode(params, callback) {
  return this.codes.map(function callback(code) {
    result = {};
    result['code'] = code.code;
    result['system'] = code.system;
    return result;
  });
}

// Return the Mongo id for this datatype.
DatatypeSchema.methods.id = function id(params, callback) {
  return this._id;
}

module.exports.DatatypeSchema = DatatypeSchema;
module.exports.extendSchema = extendSchema;
