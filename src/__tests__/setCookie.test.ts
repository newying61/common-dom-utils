import { getCookie, setCookie } from '..';

describe('setCookie', () => {
  it('should set cookie value', () => {
    setCookie('test', 'test1', 1);

    expect(getCookie('test')).toBe('test1');
  });

  it('should set cookie value without expires', () => {
    setCookie('test', 'test1');

    expect(getCookie('test')).toBe('test1');
  });
});
