import { saveToLocalStorage, getFromLocalStorage } from '..';

describe('getFromLocalStorage - get object from local storage', () => {
  it('should get object from localStorage', () => {
    const obj = { a: 1 };
    saveToLocalStorage('test', obj);

    expect(getFromLocalStorage('test')).toEqual(obj);
  });

  it('should get undefined if object not parsable', () => {
    const obj = 'a';
    window.localStorage.setItem('test1', obj);

    expect(getFromLocalStorage('test1')).toBe(undefined);
  });
});
