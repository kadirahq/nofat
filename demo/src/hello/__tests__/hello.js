import {expect} from 'chai';
import hello from '../hello';

describe('hello', function () {
  it('should log hello', function () {
    expect(1).to.equal(1);
    hello();
  });

  it('should fail', function () {
    expect(1).to.equal(2);
  });
});
