import { clearLocalStorage } from '..';

describe('clearLocalStorage', () => {
  it('should clear localStorage', () => {
    window.localStorage.setItem('test-clear', 'test');
    expect(window.localStorage.getItem('test-clear')).toBe('test');

    clearLocalStorage();

    expect(window.localStorage.getItem('test-clear')).toBe(null);
  });
});
