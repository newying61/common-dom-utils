import { saveToSessionStorage, getFromSessionStorage } from '..';

describe('getFromSessionStorage - get object from session storage', () => {
  it('should get object from sessionStorage', () => {
    const obj = { a: 1 };
    saveToSessionStorage('test', obj);

    expect(getFromSessionStorage('test')).toEqual(obj);
  });

  it('should get undefined if object not parsable', () => {
    const obj = 'a';
    window.sessionStorage.setItem('test1', obj);

    expect(getFromSessionStorage('test1')).toBe(undefined);
  });
});
