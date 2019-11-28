export function removeElement(node: Element) {
  if (!node) {
    return;
  }

  const parent = node.parentNode;

  if (!parent) {
    // If node not in DOM already
    return;
  }

  parent.removeChild(node);
}
