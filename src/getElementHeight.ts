export function getElementHeight(el: HTMLElement) {
  if (!el) {
    return 0;
  }

  return el.offsetHeight;
}
