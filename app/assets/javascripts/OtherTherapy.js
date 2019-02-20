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

const OtherTherapySchema = DataElementSchema({
  therapyRelationshipType: Any,
  medication: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'OtherTherapy' },

});

module.exports.OtherTherapySchema = OtherTherapySchema;
module.exports.OtherTherapy = mongoose.model('OtherTherapy', OtherTherapySchema);
