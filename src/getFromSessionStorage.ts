export function getFromSessionStorage(key: string) {
  const obj = window.sessionStorage.getItem(key);

  try {
    const val = JSON.parse(obj);
    return val;
  } catch(e) {
    return undefined;
  }
}
