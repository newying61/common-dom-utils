export function isElementVisible(el: HTMLElement) {
  if (!el) {
    return true;
  }

  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}
