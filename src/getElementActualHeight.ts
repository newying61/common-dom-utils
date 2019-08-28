export function getElementActualHeight(el: HTMLElement) {
  if (!el) {
    return 0;
  }

  return el.scrollHeight;
}
