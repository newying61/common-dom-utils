import { removeElement } from '..';

describe('removeElement - remove node from DOM', () => {
  it('should return node if node is null', () => {
    removeElement(null);
  });

  it('should do nothing if node already removed from DOM', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    document.body.removeChild(div);

    // Remove node twice
    removeElement(div);
  });

  it('should detach node from dom', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    expect(document.body.contains(div)).toBe(true);

    removeElement(div);

    expect(document.body.contains(div)).toBe(false);
  });
});