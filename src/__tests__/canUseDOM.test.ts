import { canUseDOM } from '..';

describe('canUseDOM', () => {
  it('should return whether can use DOM', () => {
    expect(canUseDOM).toBe(true);
  });
});
