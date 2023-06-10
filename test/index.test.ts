import { Demo } from '../src/index';

describe('demo', () => {
  const demo = new Demo('demo');
  it('sayIt', () => {
    expect(demo.sayIt()).toEqual('demo');
  });
});
