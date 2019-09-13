export function html(target: HTMLElement, htmlString?: string) {
  if (!target) {
    return '';
  }

  if (htmlString !== undefined && typeof htmlString === 'string') {
    target.innerHTML = htmlString;
  }

  return target.innerHTML;
}
