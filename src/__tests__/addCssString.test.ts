import { addCssString } from '..';

describe('addCssString - add css string into DOM', () => {
  it('should add css string', () => {
    const cssString = '* {box-sizing: border-box}';
    addCssString(cssString);

    const style = document.head.querySelector('style');
    expect(style).not.toBe(null);

    expect(style.innerHTML).toBe(cssString);
  });

  it('should add css string into container', () => {
    const cssString = '* {box-sizing: border-box}';
    const div = document.createElement('div');

    addCssString(cssString, div);

    const style = div.querySelector('style');
    expect(style).not.toBe(null);

    expect(style.innerHTML).toBe(cssString);
  });

  it('should add css string into container before other children', () => {
    const cssString = '* {box-sizing: border-box}';
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.appendChild(span);

    addCssString(cssString, div, true);

    const style = div.querySelector('style');
    expect(style).not.toBe(null);

    expect(style.innerHTML).toBe(cssString);
    expect(style.nextSibling).toBe(span);
  });
});