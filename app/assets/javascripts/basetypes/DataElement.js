const mongoose = require('mongoose/browser');
const cql = require('cql-execution');
const Code = require('./Code.js');
const Identifier = require('../attributes/Identifier');

const [Schema] = [mongoose.Schema];

function DataElementSchema(add, options) {
  const extended = new Schema({
    dataElementCodes: { type: [Code] },
    description: { type: String },
    codeListId: { type: String },
    id: {
      type: String,
      default() {
        return this._id ? this._id.toString() : mongoose.Types.ObjectId().toString();
      },
    },
  }, options);

  if (add) {
    extended.add(add);
  }

  // Returns all of the codes on this data element in a format usable by
  // the cql-execution framework.
  extended.methods.getCode = function getCode() {
    if (this.dataElementCodes) {
      return this.dataElementCodes.map((code) => {
        if (code.isCode) {
          return code;
        }
        return new cql.Code(code.code, code.system, code.version, code.display);
      });
    }
    return null;
  };

  // Return the first code on this data element in a format usable by
  // the cql-execution framework.
  extended.methods.code = function code() {
    if (this.dataElementCodes && this.dataElementCodes[0]) {
      const qdmCode = this.dataElementCodes[0];
      if (qdmCode.isCode) {
        return qdmCode;
      }
      return new cql.Code(qdmCode.code, qdmCode.system, qdmCode.version, qdmCode.display);
    }
    return null;
  };

  /* eslint no-underscore-dangle: 0 */
  extended.methods._is = function _is(typeSpecifier) {
    return this._typeHierarchy().some(
      t => t.type === typeSpecifier.type && t.name === typeSpecifier.name
    );
  };

  /* eslint no-underscore-dangle: 0 */
  extended.methods._typeHierarchy = function _typeHierarchy() {
    const typeName = this._type.replace(/QDM::/, '');
    const prefix = this.negationRationale ? 'Negative' : 'Positive';
    const ver = this.qdmVersion.replace('.', '_');
    return [
      {
        name: `{urn:healthit-gov:qdm:v${ver}}${prefix}${typeName}`,
        type: 'NamedTypeSpecifier',
      },
      {
        name: `{urn:healthit-gov:qdm:v${ver}}${typeName}`,
        type: 'NamedTypeSpecifier',
      },
      { name: '{urn:hl7-org:elm-types:r1}Tuple', type: 'NamedTypeSpecifier' },
      { name: '{urn:hl7-org:elm-types:r1}Any', type: 'NamedTypeSpecifier' },
    ];
  };
  return extended;
}

module.exports.DataElementSchema = DataElementSchema;
