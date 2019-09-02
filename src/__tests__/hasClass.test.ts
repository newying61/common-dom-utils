import { addClass, removeClass, hasClass } from '..';

describe('hasClass - check class name exists or not', () => {
  it('should add class to target', () => {
    addClass(document.body, 'test');

    expect(document.body.className).toBe('test');
    expect(hasClass(document.body, 'test')).toBe(true);

    removeClass(document.body, 'test');
    expect(hasClass(document.body, 'test')).toBe(false);
  });
});
