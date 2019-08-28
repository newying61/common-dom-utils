export function setElementMaxHeight(el: HTMLElement, maxHeight: string) {
  if (!el) {
    return;
  }

  el.style.maxHeight = maxHeight;
}
