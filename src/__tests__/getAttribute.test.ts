import { getAttribute } from '..';

describe('getAttribute - get attribute value', () => {
  it('should get attribute from target', () => {
    const target = document.createElement('div');
    target.id = 'test';
    document.body.appendChild(target);

    const val = getAttribute(target, 'id');

    expect(val).toBe('test');
  });

  it('should return if target does not exist', () => {
    try {
      getAttribute(null, 'test');
    } catch {
      fail('should not come here');
    }
  });
});
