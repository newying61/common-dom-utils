import { setAttribute } from '..';

describe('setAttribute - add attribute to element', () => {
  it('should add attribute to target', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    setAttribute(target, 'test', '1');

    expect(target.getAttribute('test')).toBe('1');
  });

  it('should return if target does not exist', () => {
    try {
      setAttribute(null, 'test', '1');
    } catch {
      fail('should not come here');
    }
  });
});
