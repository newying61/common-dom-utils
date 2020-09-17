export function getCssPropertyValue(el: HTMLElement, propertyName: string) {
  if (!el) {
    return '';
  }

  const style = window.getComputedStyle(el);
  const value = style.getPropertyValue(propertyName);

  return value;
}
