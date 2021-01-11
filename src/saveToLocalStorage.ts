export function saveToLocalStorage(key: string, obj: Record<string, unknown>) {
  const str = JSON.stringify(obj);

  window.localStorage.setItem(key, str);

  return str;
}
