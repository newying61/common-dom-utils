import { clearSessionStorage } from '..';

describe('clearSessionStorage', () => {
  it('should clear sessionStorage', () => {
    window.sessionStorage.setItem('test-clear', 'test');
    expect(window.sessionStorage.getItem('test-clear')).toBe('test');

    clearSessionStorage();

    expect(window.sessionStorage.getItem('test-clear')).toBe(null);
  });
});
