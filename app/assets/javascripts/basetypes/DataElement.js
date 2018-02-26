const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Code = Schema.Types.Code;

function extendSchema(TSchema, definition, options) {
  return new Schema(
    Object.assign({}, TSchema.obj, definition),
    options
  );
}

var DataElementSchema = new Schema({
  data_element_codes: {type: [Code]}
});

// Returns the attribute requested on the data element.
DataElementSchema.methods.get = function get(attribute, callback) {
  return this[attribute]();
}

// Returns all of the codes on this data element.
DataElementSchema.methods.getCode = function getCode(params, callback) {
  return this.data_element_codes.map(function callback(code) {
    result = {};
    result['code'] = code.code;
    result['system'] = code.system;
    return result;
  });
}

// Returns all of the codes on this data element.
DataElementSchema.methods.codes = function getCode(params, callback) {
  return this.data_element_codes;
}

// Return the Mongo id for this data element.
DataElementSchema.methods.id = function id(params, callback) {
  return this._id;
}

module.exports.DataElementSchema = DataElementSchema;
module.exports.extendSchema = extendSchema;
