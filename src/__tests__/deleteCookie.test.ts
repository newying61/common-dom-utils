import { deleteCookie, getCookie, setCookie } from '..';

describe('deleteCookie', () => {
  it('should delete cookie value', () => {
    setCookie('test', 'test1', 1);

    expect(getCookie('test')).toBe('test1');

    deleteCookie('test');

    expect(getCookie('test')).toBe('');
  });
});
