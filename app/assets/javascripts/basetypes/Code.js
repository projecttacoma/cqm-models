const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

function Code(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Code');
}
Code.prototype = Object.create(mongoose.SchemaType.prototype);

Code.prototype.cast = (code) => {
  if (code != null) {
    // return code if it doesn't even need casting
    if (code.isCode) {
      return code;
    }
    // handles codes that have not yet been cast to a code and those that have already been cast to a code
    if (code.code && code.system) {
      const val = { code: code.code, system: code.system };
      val.display = (typeof code.display !== 'undefined') ? code.display : null;
      val.version = (typeof code.version !== 'undefined') ? code.version : null;

      return new cql.Code(val.code, val.system, val.version, val.display);
    }
    throw new Error(`Expected a code. Received ${code}.`);
  } else {
    // returns a null or undefined if what is passed in is null or undefined
    return code;
  }
};

mongoose.Schema.Types.Code = Code;
module.exports = Code;
