export function removeChildren(node: Element) {
  if (!node) {
    return;
  }

  const cNode = node.cloneNode(false);
  node.parentNode.replaceChild(cNode, node);
}
