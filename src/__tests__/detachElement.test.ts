import { detachElement } from '..';

describe('detachElement - detach node from DOM', () => {
  it('should return node if node is null', () => {
    const element = detachElement(null);

    expect(element).toBe(null);
  });

  it('should return node if node already removed from DOM', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    // Remove div immediately, so that parentNode does not exist
    document.body.removeChild(div);

    const node = detachElement(div);
    expect(node).toBe(div);
  });

  it('should detach node from dom', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    expect(document.body.contains(div)).toBe(true);

    const node = detachElement(div);
    expect(node).toBe(div);
    expect(document.body.contains(div)).toBe(false);
  });
});