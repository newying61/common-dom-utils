import { getCookie, setCookie } from '..';

describe('getCookie', () => {
  it('should return cookie value', () => {
    setCookie('test', 'test1', 1);

    expect(getCookie('test')).toBe('test1');
  });

  it('should return empty if cookie does not exist', () => {
    setCookie('test', 'test1', 1);

    expect(getCookie('test2')).toBe('');
  });
});
