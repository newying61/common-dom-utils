export function prependChild(el: Node, container: HTMLElement) {
  container.insertBefore(el, container.firstChild);
}
