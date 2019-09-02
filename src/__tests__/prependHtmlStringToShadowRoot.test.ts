import { prependHtmlStringToShadowRoot } from '..';

describe('prependHtmlStringToShadowRoot - prepend html string to shadowRoot', () => {
  it('should prepend html string to shadowRoot', () => {
    const div = document.createElement('div');
    const shadowRoot = div.attachShadow({ mode: 'open' });

    prependHtmlStringToShadowRoot('<span>hello world</span>', shadowRoot);

    expect(shadowRoot.firstChild.textContent).toBe('hello world');
  });
});
