export function getElementOffset(el: HTMLElement) {
  if (!el) {
    return 0;
  }

  const rect = el.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset,
    width: el.offsetWidth,
    height: el.offsetHeight,
  }
}