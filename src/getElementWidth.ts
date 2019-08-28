export function getElementWidth(el: HTMLElement) {
  if (!el) {
    return 0;
  }

  return el.offsetWidth;
}
