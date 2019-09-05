import { addClass } from '..';

describe('addClass - add class', () => {
  it('should add class to target', () => {
    addClass(document.body, 'test');

    expect(document.body.className).toBe('test');
  });

  it('should return if target does not exist', () => {
    try {
      addClass(null, 'test');
    } catch {
      fail('should not come here');
    }
  });
});
