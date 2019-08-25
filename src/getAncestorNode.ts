/*
 * Function used to get the target ancestor node.
 * This will cross the shadowRoot and search into document.
 * If not found, null will be returned.
 *
 */
export default function getAncestorNode(
  current: HTMLElement|ShadowRoot,
  isNodeFound: (node: any) => boolean): HTMLElement|null {
  let node: any = current;

  while (node) {
    // Only check HTMLElement without ShadowRoot
    if (node.parentNode && isNodeFound(node)) {
      return node;
    }

    node = node.parentNode || node.host;

    if (!node || node === document) {
      return null;
    }
  }

  return node;
}
