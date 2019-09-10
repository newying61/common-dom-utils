export function setAttribute(
  target: Element,
  name: string,
  value: string): Element {
    if (target) {
      target.setAttribute(name, value);
    }

    return target;
}
