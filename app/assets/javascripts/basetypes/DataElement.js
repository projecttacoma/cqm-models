const mongoose = require('mongoose');
const Code = require('./Code.js');

const [Schema] = [mongoose.Schema];

function DataElementSchema(add, options) {
  const extended = new Schema({
    dataElementCodes: { type: [Code] },
    description: { type: String },
  }, options);

  if (add) {
    extended.add(add);
  }

<<<<<<< f21885514e4c999d2f292e8f0c159f98547ea101
<<<<<<< e2c5d196252348bbb6ef14a6f640a89e2015c9ef
<<<<<<< 59e4f221ab323fc1cab7d471f402f47ed0bd68fb
  // TODO: REMOVE THIS. No longer needed after the change to camelCase
  // Mangle and override the Mongoose Model get() function to allow
  // camelCase queries to be interpreted as the snake_case fields
=======
>>>>>>> Add camel case alias to Interval, add camel case get() flexibility to data elements
=======
  // TODO: REMOVE THIS. No longer needed after the change to camelCase
  // Mangle and override the Mongoose Model get() function to allow
  // camelCase queries to be interpreted as the snake_case fields
>>>>>>> Added comments and revised Interval fields
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

<<<<<<< e2c5d196252348bbb6ef14a6f640a89e2015c9ef
<<<<<<< 59e4f221ab323fc1cab7d471f402f47ed0bd68fb
=======
>>>>>>> Revert the naming of everything related to the patient model from snake_case to camelCase
  // Returns all of the codes on this data element
  // in a format usable by the cql-execution framework
=======
  // Returns all of the codes on this data element.
>>>>>>> Add camel case alias to Interval, add camel case get() flexibility to data elements
=======
  // Returns all of the codes on this data element
  // in a format usable by the cql-execution framework
>>>>>>> Added comments and revised Interval fields
  extended.methods.getCode = function getCode() {
    return this.dataElementCodes.map((code) => {
      const result = {};
      result.code = code.code;
      result.system = code.codeSystem;
      return result;
    });
  };

<<<<<<< e2c5d196252348bbb6ef14a6f640a89e2015c9ef
<<<<<<< 59e4f221ab323fc1cab7d471f402f47ed0bd68fb
  // Returns all of the codes on this data element
  // in their normal form.
=======
  // Returns all of the codes on this data element.
>>>>>>> Add camel case alias to Interval, add camel case get() flexibility to data elements
=======
  // Returns all of the codes on this data element
  // in their normal form.
>>>>>>> Added comments and revised Interval fields
  extended.methods.codes = function getCodes() {
    return this.dataElementCodes;
  };

  return extended;
}

module.exports.DataElementSchema = DataElementSchema;
