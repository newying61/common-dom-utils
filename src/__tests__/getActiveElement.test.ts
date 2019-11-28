import { getActiveElement } from '..';

describe('getActiveElement - return activeElement', () => {
  it('should return activeElement', () => {
    const button = document.createElement('button');
    document.body.appendChild(button);
    button.focus();

    const element = getActiveElement();

    expect(element).toBe(button);
  });

  it('should return activeElement with shadow DOM', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    div.shadowRoot.appendChild(button);

    button.focus();

    const element = getActiveElement();

    expect(element).toBe(div);

    const realEl = getActiveElement(true);
    expect(realEl).toBe(button);
  });
});