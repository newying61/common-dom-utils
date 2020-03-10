export function scrollIntoView(el: HTMLElement, alignToTop = true) {
  if (!el) {
    return;
  }

  el.scrollIntoView(alignToTop);
}
