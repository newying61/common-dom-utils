/*
 * Function used to get shadowRoot.
 * If element is not in shadow DOM, return null.
 *
 */
export function getShadowRoot(el: HTMLElement) {
  if (!el) {
    return null;
  }

  const shadowRoot: any = el.getRootNode();

  // @ts-ignore
  if (shadowRoot instanceof ShadowRoot) {
    return shadowRoot;
  }

  return null;
}
