export function getFromLocalStorage(key: string) {
  const obj = window.localStorage.getItem(key);

  try {
    const val = JSON.parse(obj);
    return val;
  } catch(e) {
    return undefined;
  }
}
