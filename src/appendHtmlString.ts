export function appendHtmlString(htmlString: string, container: HTMLElement) {
  container.insertAdjacentHTML('beforeend', htmlString);
}
