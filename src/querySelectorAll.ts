export function querySelectorAll(
  selector: string,
  container: HTMLElement|Document|ShadowRoot = document) {
  return container.querySelectorAll(selector);
}
