export default function getActiveElement(withShadowRoot: boolean = false) {
  let a = document.activeElement;

  while(withShadowRoot && a && a.shadowRoot && a.shadowRoot.activeElement) {
    a = a.shadowRoot.activeElement;
  }

  return a;
}
