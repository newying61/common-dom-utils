export function removeClass(target: HTMLElement, className: string): HTMLElement {
  target.classList.remove(className);

  return target;
}
