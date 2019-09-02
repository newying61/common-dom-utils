import { prependHtmlString } from '..';

describe('prependHtmlString - prepend html string to container', () => {
  it('should prepend html string to container', () => {
    prependHtmlString('<span>hello world</span>', document.body);

    expect(document.body.firstChild.textContent).toBe('hello world');
  });
});
