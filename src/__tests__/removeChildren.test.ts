import { removeChildren } from '..';

describe('removeChildren - remove children from DOM', () => {
  it('should do nothing if node is null', () => {
    removeChildren(null);
  });

  it('should remove one child from dom', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    expect(document.body.contains(div)).toBe(true);

    removeChildren(document.body);

    expect(document.body.contains(div)).toBe(false);
  });

  it('should remove all children from dom', () => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    document.body.appendChild(div);
    document.body.appendChild(span);

    expect(document.body.contains(div)).toBe(true);
    expect(document.body.contains(span)).toBe(true);

    removeChildren(document.body);

    expect(document.body.contains(div)).toBe(false);
    expect(document.body.contains(span)).toBe(false);
  });
});