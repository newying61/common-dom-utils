export function getCookie(name: string) {
  const cookieName = name + "=";
  const cookieArr = document.cookie.split(';');

  for (let i = 0, j = cookieArr.length; i < j; i++) {
      const ex = cookieArr[i].trimLeft();
      if (ex.indexOf(cookieName) == 0) {
        return ex.substring(cookieName.length, ex.length);
      }
  }

  return '';
}
