import { addClass, toggleClass } from '..';

describe('addClass - add class', () => {
  it('should add class to target', () => {
    addClass(document.body, 'test');

    expect(document.body.className).toBe('test');

    const removeFlg = toggleClass(document.body, 'test');
    expect(removeFlg).toBe(false);

    const addFlg = toggleClass(document.body, 'test');
    expect(addFlg).toBe(true);
  });
});
