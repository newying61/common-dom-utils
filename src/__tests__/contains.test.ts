import { contains } from '..';

describe('contains - check whether container has node or not', () => {
  it('should return true if container has node', () => {
    const button = document.createElement('button');
    document.body.appendChild(button);

    const check = contains(document.body, button);

    expect(check).toBe(true);
  });

  it('should return false if container does not have node', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.attachShadow({ mode: 'open' });

    const button = document.createElement('button');

    document.body.appendChild(button);

    const check = contains(div.shadowRoot, button);

    expect(check).toBe(false);
  });

  it('should return true, if ndoe inside shadow DOM', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    div.shadowRoot.appendChild(button);

    const check = contains(div.shadowRoot, button);
    expect(check).toBe(true);
  });
});
