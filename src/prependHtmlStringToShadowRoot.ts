export function prependHtmlStringToShadowRoot(htmlString: string, shadowRoot: ShadowRoot) {
  const tpl = document.createElement('template');
  tpl.innerHTML = htmlString;
  shadowRoot.insertBefore(tpl.content, shadowRoot.firstChild);
}
