/*
 * Function used to get the active element.
 * Params:
 * withShadowRoot: boolean. Passing true to get the active element inside shadow DOM. default: false
 *
 */
export function getActiveElement(withShadowRoot = false) {
  let a = document.activeElement;

  while(withShadowRoot && a && a.shadowRoot && a.shadowRoot.activeElement) {
    a = a.shadowRoot.activeElement;
  }

  return a;
}
