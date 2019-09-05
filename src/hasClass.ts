export function hasClass(target: HTMLElement, className: string): boolean {
  if (!target) {
    return false;
  }

  return !!className && target.classList.contains(className);
}
