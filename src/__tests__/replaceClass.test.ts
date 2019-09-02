import { addClass, replaceClass } from '..';

describe('removeClass - remove class', () => {
  it('should remove class to target', () => {
    addClass(document.body, 'test');

    expect(document.body.className).toBe('test');

    replaceClass(document.body, 'test', 'test2');

    expect(document.body.className).toBe('test2');
  });
});
