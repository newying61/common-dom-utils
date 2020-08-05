export function addEventListener(
  el: EventTarget,
  evt: string,
  listener: EventListenerOrEventListenerObject,
  options: object | false = false
) {
  if (!el) {
    return;
  }

  el.addEventListener(evt, listener, options);

  return () => {
    el.removeEventListener(evt, listener);
  }
}
