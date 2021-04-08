const AnyEntity = require('./../../../app/assets/javascripts/basetypes/AnyEntity');
const Code = require('./../../../app/assets/javascripts/basetypes/Code');
const cql = require('cql-execution');
const PatientEntity = require('./../../../app/assets/javascripts/attributes/PatientEntity').PatientEntity;
const Practitioner = require('./../../../app/assets/javascripts/attributes/Practitioner').Practitioner;
const CarePartner = require('./../../../app/assets/javascripts/attributes/CarePartner').CarePartner;
const Organization = require('./../../../app/assets/javascripts/attributes/Organization').Organization;

describe('The AnyEntity class', () => {
  describe('Type casting', () => {

    it('Should throw a error trying to convert entity with no identifying _type', () => {
      const entityObj = {
        id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        }
      };

      expect(() => { AnyEntity.prototype.cast(entityObj) }).toThrowError('Could not find _type indicator for entity.');
    });

    it('Should throw a error trying to convert entity with no invalid _type', () => {
      const entityObj = {
        id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        },
        _type: 'QDM::InvalidEntity'
      };

      expect(() => { AnyEntity.prototype.cast(entityObj) }).toThrowError('Could not find entity type "QDM::InvalidEntity".');
    });

    it('Should passthrough null input', () => {
      const returnedObj = AnyEntity.prototype.cast(null);
      expect(returnedObj).toBeNull();
    });

    it('Should convert a PatientEntity JS Object to its type', () => {
      const entityObj = {
        id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        },
        _type: 'QDM::PatientEntity'
      };

      const returnedObj = AnyEntity.prototype.cast(entityObj);
      expect(returnedObj instanceof PatientEntity).toBe(true);
      expect(returnedObj.id).toEqual('test');
      expect(returnedObj.identifier.namingSystem).toEqual('testSystem');
      expect(returnedObj.identifier.value).toEqual('testValue');
    });

    it('Should copy _id to id if it does not have id', () => {
      const entityObj = {
        _id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        },
        _type: 'QDM::PatientEntity'
      };

      const returnedObj = AnyEntity.prototype.cast(entityObj);
      expect(returnedObj instanceof PatientEntity).toBe(true);
      expect(returnedObj.id).toEqual('test');
      expect(returnedObj.identifier.namingSystem).toEqual('testSystem');
      expect(returnedObj.identifier.value).toEqual('testValue');
    });


    it('Should convert a Practitioner JS Object to its type', () => {
      const entityObj = {
        id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        },
        role: { code: 'C123', system: '1.2.3.4', display: 'Test Role Code' },
        specialty: { code: 'S456', system: '1.2.3.4', display: 'Test Specialty Code' },
        qualification: { code: 'Q789', system: '1.2.3.4', display: 'Test Qualification Code' },
        _type: 'QDM::Practitioner'
      };

      const returnedObj = AnyEntity.prototype.cast(entityObj);
      expect(returnedObj instanceof Practitioner).toBe(true);
      expect(returnedObj.id).toEqual('test');
      expect(returnedObj.identifier.namingSystem).toEqual('testSystem');
      expect(returnedObj.identifier.value).toEqual('testValue');
      expect(returnedObj.role instanceof cql.Code).toBe(true);
      expect(returnedObj.role).toEqual(new cql.Code('C123', '1.2.3.4', null, 'Test Role Code'));
      expect(returnedObj.specialty instanceof cql.Code).toBe(true);
      expect(returnedObj.specialty).toEqual(new cql.Code('S456', '1.2.3.4', null, 'Test Specialty Code'));
      expect(returnedObj.qualification instanceof cql.Code).toBe(true);
      expect(returnedObj.qualification).toEqual(new cql.Code('Q789', '1.2.3.4', null, 'Test Qualification Code'));
    });

    it('Should convert a CarePartner JS Object to its type', () => {
      const entityObj = {
        id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        },
        relationship: { code: 'R123', system: '1.2.3.4', display: 'Test Relationship Code' },
        _type: 'QDM::CarePartner'
      };

      const returnedObj = AnyEntity.prototype.cast(entityObj);
      expect(returnedObj instanceof CarePartner).toBe(true);
      expect(returnedObj.id).toEqual('test');
      expect(returnedObj.identifier.namingSystem).toEqual('testSystem');
      expect(returnedObj.identifier.value).toEqual('testValue');
      expect(returnedObj.relationship instanceof cql.Code).toBe(true);
      expect(returnedObj.relationship).toEqual(new cql.Code('R123', '1.2.3.4', null, 'Test Relationship Code'));
    });

    it('Should convert an Organization JS Object to its type', () => {
      const entityObj = {
        id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        },
        organizationType: { code: 'T123', system: '1.2.3.4', display: 'Test Type Code' },
        _type: 'QDM::Organization'
      };

      const returnedObj = AnyEntity.prototype.cast(entityObj);
      expect(returnedObj instanceof Organization).toBe(true);
      expect(returnedObj.id).toEqual('test');
      expect(returnedObj.identifier.namingSystem).toEqual('testSystem');
      expect(returnedObj.identifier.value).toEqual('testValue');
      expect(returnedObj.organizationType instanceof cql.Code).toBe(true);
      expect(returnedObj.organizationType).toEqual(new cql.Code('T123', '1.2.3.4', null, 'Test Type Code'));
    });

    it('Should pass through the exact PatientEntity if it is already an entity', () => {
      const entity = new PatientEntity({
        id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        }
      });

      const returnedObj = AnyEntity.prototype.cast(entity);
      expect(returnedObj).toBe(entity);
    });

    it('Should pass through the exact Practitioner if it is already an entity', () => {
      const entity = new Practitioner({
        id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        },
        role: new cql.Code('C123', '1.2.3.4', null, 'Test Role Code'),
        specialty: new cql.Code('S456', '1.2.3.4', null, 'Test Specialty Code'),
        qualification: new cql.Code('Q789', '1.2.3.4', null, 'Test Qualification Code'),
      });

      const returnedObj = AnyEntity.prototype.cast(entity);
      expect(returnedObj).toBe(entity);
    });

    it('Should pass through the exact CarePartner if it is already an entity', () => {
      const entity = new Practitioner({
        id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        },
        relationship: new cql.Code('R123', '1.2.3.4', null, 'Test Relationship Code'),
      });

      const returnedObj = AnyEntity.prototype.cast(entity);
      expect(returnedObj).toBe(entity);
    });

    it('Should pass through the exact Organization entity if it is already an entity', () => {
      const entity = new Organization({
        id: 'test',
        identifier: {
          namingSystem: 'testSystem',
          value:'testValue'
        },
        type: new cql.Code('T123', '1.2.3.4', null, 'Test Type Code')
      });

      const returnedObj = AnyEntity.prototype.cast(entity);
      expect(returnedObj).toBe(entity);
    });
  });
});
