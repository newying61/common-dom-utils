import { removeAttribute, getAttribute } from '..';

describe('removeAttribute - remove attribute from target', () => {
  it('should remove attribute from target', () => {
    const target = document.createElement('div');
    target.id = 'test';
    document.body.appendChild(target);

    removeAttribute(target, 'id');

    expect(getAttribute(target, 'id')).toBe(null);
  });

  it('should return if target does not exist', () => {
    try {
      removeAttribute(null, 'test');
    } catch {
      fail('should not come here');
    }
  });
});
