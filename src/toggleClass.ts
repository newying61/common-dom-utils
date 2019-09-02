/*
 * toggle class for target.
 *
 * params:
 * target: HTMLElement
 * className: string
 *
 * return value:
 * true: className added
 * false: className removed
 */
export function toggleClass(target: HTMLElement, className: string): boolean {
  return target.classList.toggle(className);
}
