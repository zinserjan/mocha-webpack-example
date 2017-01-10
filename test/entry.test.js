// import '../src/entry';
import assert from 'assert';
import $ from 'jquery';


describe('entry', function () {

  it('just works', function () {
    console.log('works');
  });

  it('jquery works', function () {
    const text = `That is a very long text...`;
    const html = `<div>${text}</div>`;

    assert.strictEqual($(html).text(), text);
  });
});
