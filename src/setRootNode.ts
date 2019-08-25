let container: HTMLElement|ShadowRoot|Document = document;

export function setRootNode(root: HTMLElement|ShadowRoot|Document) {
  container = root;
}

export function getRootNode() {
  return container;
}
