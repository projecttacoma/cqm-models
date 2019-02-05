const allDataElements = require('./AllDataElements.js');
const allCqmModels = require('./cqm/AllCQMModels.js');

module.exports = { ...allDataElements, ...allCqmModels };
module.exports.CQL = require('cql-execution');
module.exports.Result = require('./Result.js').Result;
module.exports.ResultSchema = require('./Result.js').ResultSchema;
module.exports.IndividualResultSchema = require('./IndividualResult.js').IndividualResultSchema;
module.exports.IndividualResult = require('./IndividualResult.js').IndividualResult;
