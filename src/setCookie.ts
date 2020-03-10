export function setCookie(cname: string, cvalue: string, expireDays = 0) {
  let expires = '';

  if (expireDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));

    expires = 'expires=' + d.toUTCString();
  }
  document.cookie = `${cname}=${cvalue}; ${expires}`;
}
