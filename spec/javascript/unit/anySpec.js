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
  });
});
