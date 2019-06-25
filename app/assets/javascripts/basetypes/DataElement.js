const mongoose = require('mongoose/browser');
const Code = require('./Code.js');
const cql = require('cql-execution');
const Identifier = require('../Identifier');

const [Schema] = [mongoose.Schema];

function DataElementSchema(add, options) {
  const extended = new Schema({
    dataElementCodes: { type: [] },
    description: { type: String },
    codeListId: { type: String },
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

  // Returns all of the codes on this data element in a format usable by
  // the cql-execution framework.
  extended.methods.getCode = function getCode() {
    return this.dataElementCodes.map((code) => {
      if (code.isCode) {
        return code;
      }
      return new cql.Code(code.code, code.system, code.version, code.display);
    });
  };

  // Return the first code on this data element in a format usable by
  // the cql-execution framework.
  extended.methods.code = function code() {
    if (this.dataElementCodes && this.dataElementCodes[0]) {
      const qdmCode = this.dataElementCodes[0];
      if (qdmCode.isCode) {
        return qdmCode;
      }
      return new cql.Code(qdmCode.code, qdmCode.system, qdmCode.version, qdmCode.display);
    }
    return null;
  };

  return extended;
}

module.exports.DataElementSchema = DataElementSchema;
