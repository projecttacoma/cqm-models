const mongoose = require('mongoose');

function Code(key, options) {
  mongoose.SchemaType.call(this, key, options, 'Code');
}
Code.prototype = Object.create(mongoose.SchemaType.prototype);

mongoose.Schema.Types.Code = Code;
module.exports = Code;
