const cql = require('cql-execution');
const Code = require('./../../../app/assets/javascripts/basetypes/Code.js');
const DateTime = require('./../../../app/assets/javascripts/basetypes/DateTime.js');
const LocalDate = require('../../../app/assets/javascripts/basetypes/Date.js');
const Interval = require('./../../../app/assets/javascripts/basetypes/Interval.js');

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
  it('can create a Date from JS Date', () => {
    const date = (new LocalDate()).cast(new Date());
    expect(date.isDate).toBe(true);
  });
  it('can create a Date from cql Date', () => {
    const date = (new LocalDate()).cast(new cql.Date.fromJSDate(new Date()));
    expect(date.isDate).toBe(true);
  });
  it('throws if invalid DateTime passed to cast', () => {
    expect(() => { (new LocalDate()).cast('some invalid Date arg'); }).toThrow();
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
    expect(interval.low).toEqual(new cql.Quantity({ value: '30', unit: 'mg' }));
    expect(interval.high).toEqual(new cql.Quantity({ value: '60', unit: 'mg' }));
  });

  it('can create an interval of quantities in object form with no high value', () => {
    const interval = (new Interval()).cast({ low: { value: '30', unit: 'mg' }, high: null });
    expect(interval.low).toEqual(new cql.Quantity({ value: '30', unit: 'mg' }));
    expect(interval.high).toEqual(null);
  });

  it('throws error if quantity in object has invalid unit', () => {
    expect(() => { (new Interval()).cast({ low: { value: '30', unit: 'mcg' }, high: { value: '60', unit: 'mg' } }); }).toThrow();
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
