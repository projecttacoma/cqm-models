const mongoose = require('mongoose/browser');
const cql = require('cql-execution');

function Code(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Code');
}
Code.prototype = Object.create(mongoose.SchemaType.prototype);

Code.prototype.cast = (code) => {
  if (code != null) {
    // handles codes that have not yet been cast to a code and those that have already been cast to a code
    if (code.code && (code.codeSystemOid || code.system)) {
      if (typeof code.code === 'undefined') {
        throw new Error(`Code: ${code} does not have a code`);
      } else if (typeof code.codeSystemOid === 'undefined' && typeof code.system === 'undefined') {
        throw new Error(`Code: ${code} does not have a system oid`);
      }

      const val = { code: code.code, codeSystemOid: code.codeSystemOid || code.system };

      val.descriptor = (typeof code.descriptor !== 'undefined') ? code.descriptor : null;
      val.version = (typeof code.version !== 'undefined') ? code.version : null;

      return new cql.Code(val.code, val.codeSystemOid, val.version, val.descriptor);
    }
    throw new Error(`Expected a code. Received ${code}.`);
  } else {
    // returns a null or undefined if what is passed in is null or undefined
    return code;
  }
};

mongoose.Schema.Types.Code = Code;
module.exports = Code;
