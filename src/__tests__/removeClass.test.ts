import { addClass, removeClass } from '..';

describe('removeClass - remove class', () => {
  it('should remove class to target', () => {
    addClass(document.body, 'test');

    expect(document.body.className).toBe('test');

    removeClass(document.body, 'test');

    expect(document.body.className).toBe('');
  });

  it('should not remove class if target does not exist', () => {
    try {
      removeClass(null, 'test');
    } catch {
      fail('should not come here');
    }
  });
});
