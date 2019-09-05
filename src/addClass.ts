export function addClass(target: HTMLElement, className: string) {
  if (target) {
    target.classList.add(className);
  }

  return target;
}
