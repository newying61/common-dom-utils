import { appendChild } from '..';

describe('appendChild - append child to container', () => {
  it('should append child to container', () => {
    const el = document.createElement('span');
    appendChild(el, document.body);

    expect(document.body.lastChild).toBe(el);
  });
});
