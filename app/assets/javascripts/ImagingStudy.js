const mongoose = require('mongoose');
const { DataElementSchema } = require('./basetypes/DataElement');
const Code = require('./basetypes/Code');
const Interval = require('./basetypes/Interval');
const Quantity = require('./basetypes/Quantity');
const DateTime = require('./basetypes/DateTime');
const { ComponentSchema } = require('./Component');
const { FacilityLocationSchema } = require('./FacilityLocation');
const { IdSchema } = require('./Id');
const Any = require('./basetypes/Any');

const [Number, String] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
];

const ImagingStudySchema = DataElementSchema({
  identifier: Any,
  status: Any,
  modality: Any,
  subject: Any,
  encounter: Any,
  started: Any,
  basedOn: Any,
  referrer: Any,
  interpreter: Any,
  endpoint: Any,
  numberOfSeries: Any,
  numberOfInstances: Any,
  procedureReference: Any,
  procedureCode: Any,
  location: Any,
  reasonCode: Any,
  reasonReference: Any,
  note: Any,
  description: Any,
  series: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ImagingStudy' },

});

module.exports.ImagingStudySchema = ImagingStudySchema;
module.exports.ImagingStudy = mongoose.model('ImagingStudy', ImagingStudySchema);
