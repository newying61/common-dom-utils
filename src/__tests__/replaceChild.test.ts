import { replaceChild, appendChild } from '..';

describe('replaceChild - replace oldChild with newChild', () => {
  it('should replace oldChild with newChild', () => {
    const parent = document.createElement('div');
    appendChild(parent, document.body);

    const span1 = document.createElement('span');
    appendChild(span1, parent);

    const span2 = document.createElement('span');

    const val = replaceChild(span2, span1);

    expect(parent.firstChild).toBe(span2);
    expect(val).toBe(span1);
  });

  it('should return null if parent is null', () => {
    try {
      const val = replaceChild(document.createElement('span'), null);
      expect(val).toBe(null);
    } catch {
      fail('should not come here');
    }
  });
});
