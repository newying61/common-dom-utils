import { getHostElement } from '..';

describe('getHostElement - return host element', () => {
  it('should return null if element is null', () => {
    const node = getHostElement(null);

    expect(node).toBe(null);
  });

	it('should return null if element not in shadow DOM', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.className = 'test';

    const button = document.createElement('button');
    div.appendChild(button);

    const node = getHostElement(button);

    expect(node).toBe(null);
  });

  it('should return host element if element is inside shadowRoot', () => {
    const divParent = document.createElement('div');
    document.body.appendChild(divParent);
    divParent.className = 'test';

    const div = document.createElement('div');
    divParent.appendChild(div);

    const shadowRoot = div.attachShadow({ mode: 'open' });

    const ancestor = document.createElement('div');
    shadowRoot.appendChild(ancestor);
    const button = document.createElement('button');
    ancestor.appendChild(button);


    const element = getHostElement(button);

    expect(element).toBe(div);
  });
});