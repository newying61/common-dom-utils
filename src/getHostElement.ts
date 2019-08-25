/*
 * Function used to get host element of shadow DOM.
 * If element is not in shadow DOM, return null.
 *
 */
export function getHostElement(el: HTMLElement) {
  if (!el) {
    return null;
  }

  const shadowRoot: any = el.getRootNode();

  // @ts-ignore
  if (shadowRoot instanceof ShadowRoot) {
    return shadowRoot.host;
  }

  return null;
}
