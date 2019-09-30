import { deleteFromLocalStorage } from '..';

describe('deleteFromLocalStorage', () => {
  it('should delete key from localStorage', () => {
    window.localStorage.setItem('test-delete', 'test');
    expect(window.localStorage.getItem('test-delete')).toBe('test');

    deleteFromLocalStorage('test-delete');

    expect(window.localStorage.getItem('test-delete')).toBe(null);
  });
});
