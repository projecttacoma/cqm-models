const mongoose = require('mongoose');

function Code(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Code');
}
Code.prototype = Object.create(mongoose.SchemaType.prototype);

Code.prototype.cast = (code) => {
  if (typeof code.code === 'undefined') {
    throw new Error(`Code: ${code} does not have a code`);
  } else if (typeof code.codeSystem === 'undefined') {
    throw new Error(`Code: ${code} does not have a codeSystem`);
  }

  const val = { code: code.code, codeSystem: code.codeSystem };

  val.descriptor = (typeof code.descriptor !== 'undefined') ? code.descriptor : null;
  val.codeSystemOid = (typeof code.codeSystemOid !== 'undefined') ? code.codeSystemOid : null;
  val.version = (typeof code.version !== 'undefined') ? code.version : null;

  return val;
};

mongoose.Schema.Types.Code = Code;
module.exports = Code;
