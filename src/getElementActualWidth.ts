export function getElementActualWidth(el: HTMLElement) {
  if (!el) {
    return 0;
  }

  return el.scrollWidth;
}
