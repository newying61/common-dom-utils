import { deleteFromSessionStorage } from '..';

describe('deleteFromSessionStorage', () => {
  it('should delete key from sessionStorage', () => {
    window.sessionStorage.setItem('test-delete', 'test');
    expect(window.sessionStorage.getItem('test-delete')).toBe('test');

    deleteFromSessionStorage('test-delete');

    expect(window.sessionStorage.getItem('test-delete')).toBe(null);
  });
});
