const mongoose = require('mongoose');

function Code(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Code');
}
Code.prototype = Object.create(mongoose.SchemaType.prototype);

Code.prototype.cast = (code) => {
  if (typeof code.code === 'undefined') {
    throw new Error(`Code: ${code} does not have a code`);
  } else if (typeof code.code_system === 'undefined') {
    throw new Error(`Code: ${code} does not have a code_system`);
  }

  const val = { code: code.code, code_system: code.code_system };

  val.descriptor = (typeof code.descriptor !== 'undefined') ? code.descriptor : null;
  val.code_system_oid = (typeof code.code_system_oid !== 'undefined') ? code.code_system_oid : null;
  val.version = (typeof code.version !== 'undefined') ? code.version : null;

  return val;
};

mongoose.Schema.Types.Code = Code;
module.exports = Code;
