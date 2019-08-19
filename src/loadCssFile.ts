export default function loadCssFile(cssFileUrl: string, container: HTMLElement = document.head) {
  const styleSheet = document.createElement('link');

  styleSheet.rel = 'stylesheet';
  styleSheet.type = 'text/css';
  styleSheet.href = cssFileUrl;

  container.appendChild(styleSheet);
}
