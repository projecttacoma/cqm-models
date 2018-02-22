var mongoose = require('mongoose');

class Code {
  constructor(code, code_system, descriptor, code_system_oid, version) {
    this.code = code;
    this.code_system = code_system;
    this.descriptor = descriptor;
    this.code_system_oid = code_system_oid;
    this.version = version;
  }

  toBSON() {
    return [this.code, this.code_system, this.descriptor, this.code_system_oid, this.version];
  }
}

class CodeSchema extends mongoose.SchemaType {
  cast(code) {
    return new Code(code[0], code[1], code[2], code[3], code[4]);
  }
}

mongoose.Schema.Types.Code = CodeSchema;
