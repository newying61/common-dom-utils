import { saveToSessionStorage } from '..';

describe('saveToSessionStorage - save object to Session storage', () => {
  it('should save object to SessionStorage', () => {
    const obj = { a: 1 };
    saveToSessionStorage('test', obj);

    expect(window.sessionStorage.getItem('test')).toEqual(JSON.stringify(obj));
  });
});
