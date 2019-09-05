export function replaceClass(
  target: HTMLElement,
  oldClassName: string,
  newClassName: string): HTMLElement {
    if (target) {
      target.classList.replace(oldClassName, newClassName);
    }

    return target;
}
