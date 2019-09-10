export function removeAttribute(target: Element, name: string): Element {
    if (target) {
      target.removeAttribute(name);
    }

    return target;
}
