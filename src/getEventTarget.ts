/*
 * Function used to get the event target.
 * Params:
 * evt: Event instance
 * withShadowRoot: boolean. Passing true to get the real target, if event triggered inside shadow DOM. default: false
 *
 */
export function getEventTarget(evt: Event, withShadowRoot = false) {
  let target = evt.target;

  if (withShadowRoot &&
      target && (target as HTMLElement).shadowRoot &&
      evt.composed && evt.composedPath) {
     target = evt.composedPath().shift();
  }

  return target;
}
