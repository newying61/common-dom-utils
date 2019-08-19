import { loadCssFile } from '..';

describe('loadCssFile - add css file into DOM', () => {
  it('should add css file', () => {
    const cssFileUrl = 'https://test/test.css';
    loadCssFile(cssFileUrl);

    const linkEl = document.head.querySelector('link');
    expect(linkEl).not.toBe(null);

    expect(linkEl.href).toBe(cssFileUrl);
    expect(linkEl.type).toBe('text/css');
    expect(linkEl.rel).toBe('stylesheet');
  });

  it('should add css file into container', () => {
    const cssFileUrl = 'https://test/test.css';
    const div = document.createElement('div');

    loadCssFile(cssFileUrl, div);

    const linkEl = div.querySelector('link');
    expect(linkEl).not.toBe(null);

    expect(linkEl.href).toBe(cssFileUrl);
    expect(linkEl.type).toBe('text/css');
    expect(linkEl.rel).toBe('stylesheet');
  });

  it('should add css file into container before other children', () => {
    const cssFileUrl = 'https://test/test.css';
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.appendChild(span);

    loadCssFile(cssFileUrl, div, true);

    const linkEl = div.querySelector('link');
    expect(linkEl).not.toBe(null);

    expect(linkEl.href).toBe(cssFileUrl);
    expect(linkEl.nextSibling).toBe(span);
  });
});