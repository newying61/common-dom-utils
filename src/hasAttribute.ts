export function hasAttribute(target: Element, name: string): boolean {
  if (target) {
    return target.hasAttribute(name);
  }

  return false;
}
