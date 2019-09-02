import { appendHtmlString } from '..';

describe('appendHtmlString - append html string to container', () => {
  it('should append html string to container', () => {
    appendHtmlString('<span>hello world</span>', document.body);

    expect(document.body.lastChild.textContent).toBe('hello world');
  });
});
