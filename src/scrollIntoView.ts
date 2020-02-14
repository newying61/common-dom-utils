export function scrollIntoView(el: HTMLElement, alignToTop: boolean = true) {
  if (!el) {
    return;
  }

  el.scrollIntoView(alignToTop);
}
