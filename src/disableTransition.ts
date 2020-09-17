export function disableTransition(el: HTMLElement) {
  if (!el) {
    return;
  }

  el.style.transition = 'none';

  return () => {
    el.style.transition = '';
  };
}
