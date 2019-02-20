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

const ServiceRequestSchema = DataElementSchema({
  identifier: Any,
  instantiatesCanonical: Any,
  instantiatesUri: Any,
  basedOn: Any,
  replaces: Any,
  requisition: Any,
  status: Any,
  intent: Any,
  category: Any,
  priority: Any,
  doNotPerform: Any,
  code: Any,
  orderDetail: Any,
  quantity: Any,
  subject: Any,
  encounter: Any,
  occurrence: Any,
  asNeeded: Any,
  authoredOn: Any,
  requester: Any,
  performerType: Any,
  performer: Any,
  locationCode: Any,
  locationReference: Any,
  reasonCode: Any,
  reasonReference: Any,
  insurance: Any,
  supportingInfo: Any,
  specimen: Any,
  bodySite: Any,
  note: Any,
  patientInstruction: Any,
  relevantHistory: Any,
  qdmVersion: { type: String, default: '4.0.0' },
  _type: { type: String, default: 'ServiceRequest' },

});

module.exports.ServiceRequestSchema = ServiceRequestSchema;
module.exports.ServiceRequest = mongoose.model('ServiceRequest', ServiceRequestSchema);
