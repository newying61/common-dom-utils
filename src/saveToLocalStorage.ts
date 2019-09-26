export function saveToLocalStorage(key: string, obj: object) {
  const str = JSON.stringify(obj);

  window.localStorage.setItem(key, str);

  return str;
}
