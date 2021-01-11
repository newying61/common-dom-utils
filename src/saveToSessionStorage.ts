export function saveToSessionStorage(key: string, obj: Record<string, unknown>) {
  const str = JSON.stringify(obj);

  window.sessionStorage.setItem(key, str);

  return str;
}
