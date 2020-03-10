export function addCssString(
  cssString: string,
  container: HTMLElement = document.head,
  before = false) {
    const styleEl = document.createElement("style");
    const cssEl = document.createTextNode(cssString);

    styleEl.appendChild(cssEl);

    if (before) {
      container.insertBefore(styleEl, container.firstChild);
    } else {
      container.appendChild(styleEl);
    }
}
