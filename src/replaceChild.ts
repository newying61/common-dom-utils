export function replaceChild(
  newChild: Node,
  oldChild:HTMLElement): HTMLElement {
    if (!oldChild) {
      return oldChild;
    }

    const parent = oldChild.parentNode;

    return parent.replaceChild(newChild, oldChild);
}
