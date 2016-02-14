var assert = require('assert');

require('../../constant');


var math = require('../math');
describe('math', function() {
  describe('.add()', function () {
    it('should add two values', function () {
      // lslls
      console.log(2);
      assert.equal(4, math.add(2, 2));

      // llala
      assert.equal(5, math.add(2, 3));
    });
  });
  describe('.subtract()', function () {
    it('should subtract two values', function () {
      assert.equal(4, math.subtract(6, 2));
      assert.equal(6, math.subtract(9, 3));
    });
  });

});
