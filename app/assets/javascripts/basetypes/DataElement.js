const mongoose = require('mongoose');
const Code = require('./Code.js');
const changeCase = require('change-case');

const [Schema] = [mongoose.Schema];

function DataElementSchema(add, options) {
  const extended = new Schema({
    data_element_codes: { type: [Code] },
    description: { type: String },
  }, options);

  if (add) {
    extended.add(add);
  }

  // TODO: REMOVE THIS. No longer needed after the change to camelCase
  // Mangle and override the Mongoose Model get() function to allow
  // camelCase queries to be interpreted as the snake_case fields
  extended.methods.get = function get(path, type) {
    let adhoc;
    const pathSnake = changeCase.snakeCase(path);
    if (type) {
      adhoc = Schema.interpretAsType(path, type, this.schema.options) || Schema.interpretAsType(pathSnake, type, this.schema.options);
    }

    const schema = this.$__path(path) || this.$__path(pathSnake) || this.schema.virtualpath(path) || this.schema.virtualpath(pathSnake);

    const pieces = path.split('.');
    const piecesSnake = pathSnake.split('.');
    let obj = this._doc;

    if (schema instanceof mongoose.VirtualType) {
      return schema.applyGetters(null, this);
    }

    for (let i = 0, l = pieces.length; i < l; i += 1) {
      obj = obj === null || obj === undefined
        ? undefined
        : (obj[pieces[i]] || obj[piecesSnake[i]]);
    }

    if (adhoc) {
      obj = adhoc.cast(obj);
    }

    if (schema) {
      obj = schema.applyGetters(obj, this);
    }

    return obj;
  };

  // Returns all of the codes on this data element
  // in a format usable by the cql-execution framework
  extended.methods.getCode = function getCode() {
    return this.data_element_codes.map((code) => {
      const result = {};
      result.code = code.code;
      result.system = code.code_system;
      return result;
    });
  };

  // Returns all of the codes on this data element
  // in their normal form.
  extended.methods.codes = function getCodes() {
    return this.data_element_codes;
  };

  return extended;
}

module.exports.DataElementSchema = DataElementSchema;
