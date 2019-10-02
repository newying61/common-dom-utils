export function saveToSessionStorage(key: string, obj: object) {
  const str = JSON.stringify(obj);

  window.sessionStorage.setItem(key, str);

  return str;
}
