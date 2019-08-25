export function getElementTop(el: HTMLElement) {
  if (!el) {
    return 0;
  }

  const rect = el.getBoundingClientRect();
  const top = rect.top + window.pageYOffset;

  return top;
}
