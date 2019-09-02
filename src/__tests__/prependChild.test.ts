import { prependChild } from '..';

describe('prependChild - prepend child to container', () => {
  it('should prepend child to container', () => {
    const el = document.createElement('span');
    prependChild(el, document.body);

    expect(document.body.firstChild).toBe(el);
  });
});
