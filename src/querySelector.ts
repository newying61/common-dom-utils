export function querySelector(
  selector: string,
  container: HTMLElement|Document|ShadowRoot = document) {
    return container.querySelector(selector);
}
