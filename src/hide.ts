export function hide(el: HTMLElement) {
  if (!el) {
    return;
  }

  el.style.display = 'none';
}
