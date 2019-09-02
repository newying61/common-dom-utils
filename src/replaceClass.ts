export function replaceClass(
  target: HTMLElement,
  oldClassName: string,
  newClassName: string): HTMLElement {
    target.classList.replace(oldClassName, newClassName);

    return target;
}
