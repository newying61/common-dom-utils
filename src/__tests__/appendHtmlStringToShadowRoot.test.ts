import { appendHtmlStringToShadowRoot } from '..';

describe('prependHtmlStringToShadowRoot - prepend html string to shadowRoot', () => {
  it('should prepend html string to shadowRoot', () => {
    const div = document.createElement('div');
    const shadowRoot = div.attachShadow({ mode: 'open' });

    appendHtmlStringToShadowRoot('<span>hello world</span>', shadowRoot);

    expect(shadowRoot.lastChild.textContent).toBe('hello world');
  });
});
