import { addClass, removeClass } from '..';

describe('removeClass - remove class', () => {
  it('should remove class to target', () => {
    addClass(document.body, 'test');

    expect(document.body.className).toBe('test');

    removeClass(document.body, 'test');

    expect(document.body.className).toBe('');
  });
});
