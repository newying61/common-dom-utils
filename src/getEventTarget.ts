export default function getEventTarget(evt: Event, withShadowRoot: boolean = false) {
  let target = evt.target;

  if (withShadowRoot &&
      target && (target as HTMLElement).shadowRoot &&
      evt.composed && evt.composedPath) {
     target = event.composedPath().shift();
  }

  return target;
}
