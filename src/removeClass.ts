export function removeClass(target: HTMLElement, className: string): HTMLElement {
  if (target) {
    target.classList.remove(className);
  }

  return target;
}
