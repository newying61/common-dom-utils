export function removeChildren(node: Element) {
  if (!node) {
    return;
  }

  var cNode = node.cloneNode(false);
  node.parentNode.replaceChild(cNode, node);
}
