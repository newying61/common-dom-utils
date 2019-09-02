export function appendHtmlStringToShadowRoot(htmlString: string, shadowRoot: ShadowRoot) {
  const tpl = document.createElement('template');
  tpl.innerHTML = htmlString;
  shadowRoot.appendChild(tpl.content);
}
