import { addEventListener, addClass, hasClass } from '..';

describe('addEventListener - add event listener', () => {
  const count = 0;
  const listener = () => {
    addClass(document.body, `called${count}`);
  }

  it('should not add event listener to null target', () => {
    try {
      addEventListener(null, "click", listener);
    } catch (e) {
      fail("should not come here");
    }
  });

  it('should add event listener', () => {
    const removeListener = addEventListener(document, "click", listener);

    document.body.click();

    expect(hasClass(document.body, "called0")).toBe(true);

    removeListener();

    document.body.click();

    expect(hasClass(document.body, "called1")).toBe(false);
  });
});
