export function loadCssFile(
  cssFileUrl: string,
  container: HTMLElement = document.head,
  before = false) {
    const styleSheet = document.createElement('link');

    styleSheet.rel = 'stylesheet';
    styleSheet.type = 'text/css';
    styleSheet.href = cssFileUrl;

    if (before) {
      container.insertBefore(styleSheet, container.firstChild);
    } else {
      container.appendChild(styleSheet);
    }
}
