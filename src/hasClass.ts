export function hasClass(target: HTMLElement, className: string): boolean {
  return !!className && target.classList.contains(className);
}
