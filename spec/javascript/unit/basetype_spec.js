const Code = require('./../../../app/assets/javascripts/basetypes/Code.js');
const DateTime = require('./../../../app/assets/javascripts/basetypes/DateTime.js');
const Interval = require('./../../../app/assets/javascripts/basetypes/Interval.js');
const QDMDate = require('../../../app/assets/javascripts/basetypes/QDMDate.js');
const Quantity = require('./../../../app/assets/javascripts/basetypes/Quantity.js');
const Ratio = require('./../../../app/assets/javascripts/basetypes/Ratio.js');
const cql = require('cql-execution');

describe('basetype DateTime', () => {
  it('can create a DateTime from JS Date', () => {
    const date = (new DateTime()).cast(new Date());
    expect(date.isDateTime).toBe(true);
  });

  it('can create a DateTime from cql DateTime', () => {
    const date = (new DateTime()).cast(new cql.DateTime(new Date()));
    expect(date.isDateTime).toBe(true);
  });
  it('throws if invalid DateTime passed to cast', () => {
    expect(() => { (new DateTime()).cast('some invalid DateTime arg'); }).toThrow();
  });
});

describe('basetype Date', () => {
  it('can create a Date from Date String', () => {
    const date = (new QDMDate()).cast('1984-02-03');
    expect(date.isDate).toBe(true);
  });
  it('can create a Date from cql Date', () => {
    const date = (new QDMDate()).cast(new cql.Date.fromJSDate(new Date()));
    expect(date.isDate).toBe(true);
  });

  it('can create a Date from Date object', () => {
    const date = (new QDMDate()).cast({year: 1984, month: 2, day: 3});
    expect(date.isDate).toBe(true);
  });
  it('throws if invalid DateTime passed to cast', () => {
    expect(() => { (new QDMDate()).cast('some invalid Date arg'); }).toThrow();
  });
});

describe('basetype Interval', () => {
  it('can create an interval from cql.Interval of DateTime', () => {
    const interval = (new Interval()).cast(new cql.Interval(new cql.DateTime(2012, 9, 9, 10, 45, 0, 0, 0), new cql.DateTime(2012, 10, 9, 10, 45, 0, 0, 0)));
    expect(interval.highClosed).toBe(true);
  });

  it('can create an interval from cql.Interval[null,null]', () => {
    const interval = (new Interval()).cast(new cql.Interval(null, null));
    expect(interval.highClosed).toBe(true);
  });

  it('can create an interval from object with low: null, high: null]', () => {
    const interval = (new Interval()).cast({ low: null, high: null });
    expect(interval.lowClosed).toBe(true);
    expect(interval.highClosed).toBe(true);
    expect(interval.low).toBe(null);
    expect(interval.high).toBe(null);
  });

  it('can create an interval of object with string high and low values', () => {
    const interval = (new Interval()).cast({ low: '2019-06-11T20:14:55.000Z', high: '2019-06-11T20:15:00.000Z' });
    expect(interval.low).toEqual(new cql.DateTime(2019, 6, 11, 20, 14, 55, 0, 0));
    expect(interval.high).toEqual(new cql.DateTime(2019, 6, 11, 20, 15, 0, 0, 0));
  });

  it('throws error if invalid low date string is passed to cast', () => {
    expect(() => { (new Interval()).cast({ low: 'not a date', high: '2019-06-11T20:15:00.000Z' }); }).toThrow();
  });

  it('throws error if invalid high date string is passed to cast', () => {
    expect(() => { (new Interval()).cast({ low: '2019-06-11T20:14:55.000Z', high: 'not a date' }); }).toThrow();
  });

  it('can create an interval of quantities in object form', () => {
    const interval = (new Interval()).cast({ low: { value: '30', unit: 'mg' }, high: { value: '60', unit: 'mg' } });
    expect(interval.low).toEqual(new cql.Quantity('30', 'mg'));
    expect(interval.high).toEqual(new cql.Quantity('60', 'mg'));
  });

  it('can create an interval of quantities in object form with no high value', () => {
    const interval = (new Interval()).cast({ low: { value: '30', unit: 'mg' }, high: null });
    expect(interval.low).toEqual(new cql.Quantity('30', 'mg'));
    expect(interval.high).toEqual(null);
  });

  it('throws error if quantity in object has invalid unit', () => {
    expect(() => { (new Interval()).cast({ low: { value: '30', unit: 'mcgc' }, high: { value: '60', unit: 'mg' } }); }).toThrow();
  });
});

describe('basetype Code', () => {
  it('can create a Code from valid hash', () => {
    const code = (new Code()).cast({code: '12345', system: '1.2.3.4.5.6'});
    expect(code.isCode).toBe(true);
  });

  it('can create a Code from valid hash with version and display', () => {
    const code = (new Code()).cast({code: '12345', system: '1.2.3.4.5.6', version: '1', display: 'test'});
    expect(code.isCode).toBe(true);
  });

  it('throws if invalid Code passed to cast', () => {
    expect(() => { (new Code()).cast({bad_code_key: '12345', system: '1.2.3.4.5.6'}); }).toThrow();
  });

  it('casts null code to null', () => {
    const code = (new Code()).cast(null);
    expect(code).toBeNull()
  });

  it('cast returns code that is already a code', () => {
    const code = new cql.Code('12345', '1.2.3.4.5.6');
    const castedCode = (new Code()).cast(code);
    expect(castedCode).toBe(code);
  });
});

describe('basetype Ratio', () => {
  it('can create a Ratio from cql Quantities', () => {
    const ratio = (new Ratio()).cast({numerator: new cql.Quantity(2, 'mg'), denominator: new cql.Quantity(1, 'mg')});
    expect(ratio.numerator.value).toEqual(2);
    expect(ratio.numerator.unit).toEqual('mg');
    expect(ratio.denominator.value).toEqual(1);
    expect(ratio.denominator.unit).toEqual('mg');
  });

  it('does not allow creation of Ratio with missing numerator', () => {
    expect(() => {(new Ratio()).cast({denominator: new cql.Quantity(1, 'mg')});}).toThrow();
  });

  it('does not allow creation of Ratio with missing denominator', () => {
    expect(() => {(new Ratio()).cast({numerator: new cql.Quantity(1, 'mg')});}).toThrow();
  });
});

describe('basetype Quantity', () => {
  it('can create a Quantity from a hash', () => {
    const quantity = (new Quantity()).cast({value: 1, unit: 'mg'});
    expect(quantity.value).toEqual(1);
    expect(quantity.unit).toEqual('mg');
  });

  it('does not allow creation of Quantity with missing value', () => {
    expect(() => {(new Quantity()).cast({unit: 'mg'});}).toThrow();
  });

  it('does not allow creation of Quantity with missing unit', () => {
    expect(() => {(new Quantity()).cast({value: 1});}).toThrow();
  });

  it('does not allow creation of Quantity with invalid ucum unit', () => {
    expect(() => {(new Quantity()).cast({value: 1, unit: 'cc'});}).toThrow();
  });
});
