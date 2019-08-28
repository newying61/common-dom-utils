export function clearElementMaxHeight(el: HTMLElement) {
  if (!el) {
    return;
  }

  el.style.maxHeight = 'none';
}
