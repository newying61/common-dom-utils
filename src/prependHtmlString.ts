export function prependHtmlString(htmlString: string, container: HTMLElement) {
  container.insertAdjacentHTML('afterbegin', htmlString);
}
