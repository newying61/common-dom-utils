import { hasAttribute } from '..';

describe('hasAttribute - check whether attribute exists', () => {
  it('should check attribute exists in target', () => {
    const target = document.createElement('div');
    target.id = 'test';
    document.body.appendChild(target);

    const val = hasAttribute(target, 'id');

    expect(val).toBe(true);
  });

  it('should return if target does not exist', () => {
    try {
      hasAttribute(null, 'test');
    } catch {
      fail('should not come here');
    }
  });
});
