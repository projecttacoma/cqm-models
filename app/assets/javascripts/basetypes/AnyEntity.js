const mongoose = require('mongoose/browser');
const { PatientEntity } = require('../attributes/PatientEntity');
const { Practitioner } = require('../attributes/Practitioner');
const { CarePartner } = require('../attributes/CarePartner');
const { Organization } = require('../attributes/Organization');
const { Location } = require('../attributes/Location');

function AnyEntity(key, options) {
  mongoose.SchemaType.call(this, key, options, 'AnyEntity');
}
AnyEntity.prototype = Object.create(mongoose.SchemaType.prototype);

AnyEntity.prototype.cast = (entity) => {
  if (entity == null) {
    return null;
  }

  if (entity instanceof PatientEntity || entity instanceof Practitioner || entity instanceof CarePartner || entity instanceof Organization) {
    return entity;
  }

  if (entity._type != null) {
    // copy _id to id if it isn't defined
    if (entity.id == null && entity._id != null) {
      entity.id = entity._id;
    }
    switch (entity._type) {
      case 'QDM::PatientEntity':
        return new PatientEntity(entity);
      case 'QDM::Practitioner':
        return new Practitioner(entity);
      case 'QDM::CarePartner':
        return new CarePartner(entity);
      case 'QDM::Organization':
        return new Organization(entity);
      case 'QDM::Location':
        return new Location(entity);
      default:
        throw new Error(`Could not find entity type "${entity._type}".`);
    }
  } else {
    throw new Error('Could not find _type indicator for entity.');
  }
};

mongoose.Schema.Types.AnyEntity = AnyEntity;
module.exports = AnyEntity;
