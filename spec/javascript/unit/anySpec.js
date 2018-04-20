const Any = require('./../../../app/assets/javascripts/basetypes/Any');
const Cql = require('cql-execution');

describe('The Any class', () => {
  describe('Type casting', () => {
    it('Should convert a Quantity JS Object to its type', () => {
      const quantity_obj = {
        value: 2,
        unit: 'm',
      };

      const returned_obj = Any.prototype.cast(quantity_obj);
      expect(returned_obj instanceof Cql.Quantity).toBe(true);
      expect(returned_obj.value).toEqual(2);
      expect(returned_obj.unit).toEqual('m');
    });

    it('Should convert a Interval JS Object to its type', () => {
      const interval_obj = {
        low: '2012-05-21T11:30:00.000-04:00',
      };

      const returned_obj = Any.prototype.cast(interval_obj);
      expect(returned_obj instanceof Cql.Interval).toBe(true);
      expect(returned_obj.low instanceof Cql.DateTime).toEqual(true);
    });

    it('Should convert a DateTime JS Object to its type', () => {
      const datetime_obj = '2012-05-21T11:30:00.000-04:00';

      const returned_obj = Any.prototype.cast(datetime_obj);
      expect(returned_obj instanceof Cql.DateTime).toBe(true);
    });

    it('Should convert a non-special JS Object to its type', () => {
      const any_obj = { hi: 'no' };

      const returned_obj = Any.prototype.cast(any_obj);
      expect(returned_obj instanceof Object).toEqual(true);
      expect(returned_obj.hi).toEqual('no');
    });

    it('Should recursively convert an Array JS Object to its type', () => {
      const array_obj = [{
        low: '2012-05-21T11:30:00.000-04:00',
      }, {
        value: 2,
        unit: 'm',
      }, {
        hi: 'no',
      }];

      const returned_obj = Any.prototype.cast(array_obj);
      expect(Array.isArray(returned_obj)).toBe(true);
      expect(returned_obj[0] instanceof Cql.Interval).toEqual(true);
      expect(returned_obj[0].low instanceof Cql.DateTime).toEqual(true);
      expect(returned_obj[1] instanceof Cql.Quantity).toEqual(true);
      expect(returned_obj[2] instanceof Object).toEqual(true);
      expect(returned_obj[2].hi).toEqual('no');
    });
  });
});