import { saveToLocalStorage } from '..';

describe('saveToLocalStorage - save object to local storage', () => {
  it('should save object to localStorage', () => {
    const obj = { a: 1 };
    saveToLocalStorage('test', obj);

    expect(window.localStorage.getItem('test')).toEqual(JSON.stringify(obj));
  });
});
