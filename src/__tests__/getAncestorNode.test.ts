import { getAncestorNode } from '..';

describe('getAncestorNode - return ancestor node', () => {
  it('should return ancestor node inside document', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.className = 'test';

    const button = document.createElement('button');
    div.appendChild(button);

    const node = getAncestorNode(button, (node) => node.className === 'test');

    expect(node).toBe(div);
  });

  it('should return ancestor node cross shadowRoot', () => {
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


    const element = getAncestorNode(button, (node) => node.className === 'test');

    expect(element).toBe(divParent);
  });

  it('should return null if not found until document', () => {
    const divParent = document.createElement('div');
    document.body.appendChild(divParent);
    divParent.className = 'test-class';

    const div = document.createElement('div');
    divParent.appendChild(div);

    const shadowRoot = div.attachShadow({ mode: 'open' });

    const ancestor = document.createElement('div');
    shadowRoot.appendChild(ancestor);
    const button = document.createElement('button');
    ancestor.appendChild(button);


    const element = getAncestorNode(button, (node) => node.className === 'test');

    expect(element).toBe(null);
  });
});