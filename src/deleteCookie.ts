export function deleteCookie(cname: string) {
  document.cookie = cname + '=; Max-Age=-99999999;';
}
