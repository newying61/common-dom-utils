export function detachElement(node: Element): Element {
  if (!node) {
    return node;
  }

  const parent = node.parentNode;

  if (!parent) {
    // If node not in DOM already
    return node;
  }

  return parent.removeChild(node);
}
