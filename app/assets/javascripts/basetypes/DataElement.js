const mongoose = require('mongoose');
const Code = require('./Code.js');
const cql = require('cql-execution');
const Id = require('../Id')

const [Schema] = [mongoose.Schema];

function DataElementSchema(add, options) {
  options.id = false;
  const extended = new Schema({
    dataElementCodes: { type: [] },
    description: { type: String },
    id: {
      type: Id.IdSchema, 
      default: function() {
        return this._id ? new Id.Id({value:this._id.toString(), namingSystem:null}) : null;
      }
    }
  }, options);

  if (add) {
    extended.add(add);
  }

  // Returns all of the codes on this data element in a format usable by
  // the cql-execution framework.
  extended.methods.getCode = function getCode() {
    return this.dataElementCodes.map(code => new cql.Code(code.code, code.codeSystem, code.version, code.descriptor));
  };

  // Return the first code on this data element in a format usable by
  // the cql-execution framework.
  extended.methods.code = function code() {
    if (this.dataElementCodes && this.dataElementCodes[0]) {
      const qdmCode = this.dataElementCodes[0];
      return new cql.Code(qdmCode.code, qdmCode.codeSystem, qdmCode.version, qdmCode.descriptor);
    }
    return null;
  };

  return extended;
}

module.exports.DataElementSchema = DataElementSchema;
