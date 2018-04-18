const mongoose = require('mongoose');
const Code = require('./Code.js');

const [Schema] = [mongoose.Schema];

function DataElementSchema(add, options) {
  const extended = new Schema({
    dataElementCodes: { type: [Code] },
    description: { type: String },
  }, options);

  if (add) {
    extended.add(add);
  }

  // Returns all of the codes on this data element
  // in a format usable by the cql-execution framework
  extended.methods.getCode = function getCode() {
    return this.dataElementCodes.map((code) => {
      const result = {};
      result.code = code.code;
      result.system = code.code_system;
      return result;
    });
  };

  // Returns all of the codes on this data element
  // in their normal form.
  extended.methods.codes = function getCodes() {
    return this.dataElementCodes;
  };

  return extended;
}

module.exports.DataElementSchema = DataElementSchema;
