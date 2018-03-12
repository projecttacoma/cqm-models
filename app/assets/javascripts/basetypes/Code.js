const mongoose = require('mongoose');

class Code {
  constructor(code, code_system, descriptor, code_system_oid, version) {
    this.code = code;
    this.code_system = code_system;
    this.descriptor = descriptor;
    this.code_system_oid = code_system_oid;
    this.version = version;
  }

  toBSON() {
    const code = {};
    code.code = this.code;
    code.code_system = this.code_system;
    code.descriptor = this.descriptor;
    code.code_system_oid = this.code_system_oid;
    code.version = this.version;
    return code;
  }
}

class CodeSchema extends mongoose.SchemaType {
  cast(code) {
    return new Code(code.code, code.code_system, code.descriptor, code.code_system_oid, code.version);
  }
}

mongoose.Schema.Types.Code = CodeSchema;
module.exports = Code;
