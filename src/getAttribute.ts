export function getAttribute(target: Element, name: string): string {
  if (target) {
    return target.getAttribute(name);
  }

  return null;
}
