import { add, subtract } from '../../src/util/math';
import assert from 'assert';


describe('math', function () {

  it('add()', function () {
    const result = add(1, 2);
    assert.strictEqual(result, 3);
  });

  it('subtract()', function () {
    const result = subtract(2, 1);
    assert.strictEqual(result, 1);
  });
});
