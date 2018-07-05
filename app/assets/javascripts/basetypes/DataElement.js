const mongoose = require('mongoose');
const Code = require('./Code.js');
const cql = require('cql-execution');

const [Schema] = [mongoose.Schema];

function DataElementSchema(add, options) {
  const extended = new Schema({
    dataElementCodes: { type: [Code] },
    description: { type: String },
  }, options);

  if (add) {
    extended.add(add);
  }

  // Returns all of the codes on this data element in a format usable by
  // the cql-execution framework.
  extended.methods.getCode = function getCode() {
    return this.dataElementCodes.map((code) => {
      return new cql.Code(code.code, code.codeSystem, code.version, code.descriptor);
    });
  };

  // Return the first code on this data element in a format usable by
  // the cql-execution framework.
  extended.methods.code = function code() {
    if (this.dataElementCodes && this.dataElementCodes[0]) {
      const qdmCode = this.dataElementCodes[0];
      return new cql.Code(qdmCode.code, qdmCode.codeSystem, qdmCode.version, qdmCode.descriptor);
    } else {
      return null;
    }
  };

  // Returns all of the codes on this data element
  // in their normal form.
  extended.methods.codes = function getCodes() {
    return this.dataElementCodes;
  };

  return extended;
}

module.exports.DataElementSchema = DataElementSchema;
