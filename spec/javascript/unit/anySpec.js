const Any = require('./../../../app/assets/javascripts/basetypes/Any');
const Code = require('./../../../app/assets/javascripts/basetypes/Code');
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

    it('Should convert a Ratio JS Object to its type', () => {
      const ratio_obj = {
        numerator: {
          value: 2,
          unit: 'm',
        },
        denominator: {
          value: 5,
          unit: 'km',
        },
      };

      const returned_obj = Any.prototype.cast(ratio_obj);
      expect(returned_obj instanceof Cql.Ratio).toBe(true);
      expect(returned_obj.numerator instanceof Cql.Quantity).toBe(true);
      expect(returned_obj.denominator instanceof Cql.Quantity).toBe(true);
      expect(returned_obj.numerator.value).toEqual(2);
      expect(returned_obj.numerator.unit).toEqual('m');
      expect(returned_obj.denominator.value).toEqual(5);
      expect(returned_obj.denominator.unit).toEqual('km');
    });

    it('Should convert a Interval JS Object to its type', () => {
      const interval_obj = {
        low: '2012-05-21T11:30:00.000-04:00',
      };

      const returned_obj = Any.prototype.cast(interval_obj);
      expect(returned_obj instanceof Cql.Interval).toBe(true);
      expect(returned_obj.low instanceof Cql.DateTime).toEqual(true);
    });

    it('Should convert a DateTime JS String to its type', () => {
      const date_str = '2012-05-21T11:30:00.000+00:00';

      const returned_obj = Any.prototype.cast(date_str);
      expect(returned_obj instanceof Cql.DateTime).toBe(true);
    });

    it('Should convert a Time JS String to its type', () => {
      const time_str = '10:03:05.123';

      const returned_obj = Any.prototype.cast(time_str);
      expect(returned_obj.isTime()).toBe(true);
    });

    it('Should convert a Date JS String to its type', () => {
      const datetime_str = '2012-05-21';

      const returned_obj = Any.prototype.cast(datetime_str);
      expect(returned_obj instanceof Cql.Date).toBe(true);
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

    it('Should handle decimal values the same as integer values by returning the value', () => {
      const decimalValue = 0.3;
      const integerValue = 1;
      const returnedDecimalObject = Any.prototype.cast(decimalValue);
      const returnedIntegerObject = Any.prototype.cast(integerValue);

      expect(decimalValue).toEqual(returnedDecimalObject);
      expect(integerValue).toEqual(returnedIntegerObject);
    });

    it('Should cast any to a code from either a code or a hash', () => {
      const codeHash =  {code: '12345', system: '1.2.3.4.5.6'};
      const returnedCodeObject = Any.prototype.cast(codeHash);
      const returnedCodeCode = Any.prototype.cast(new Cql.Code('12345','1.2.3.4.5.6'));
      expect(returnedCodeObject.isCode).toBe(true);
      expect(returnedCodeObject.code).toEqual('12345');
      expect(returnedCodeObject.system).toEqual('1.2.3.4.5.6');
      expect(returnedCodeCode.isCode).toBe(true);
      expect(returnedCodeCode.code).toEqual('12345');
      expect(returnedCodeCode.system).toEqual('1.2.3.4.5.6');
    });
  });
});
