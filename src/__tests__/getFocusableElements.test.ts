import { getFocusableElements } from '..';

describe('getFocusableElements - get all focusable elements', () => {
  it('should get all focusable elements from document by default', () => {
    const btn = document.createElement('button');
    document.body.appendChild(btn);

    expect(getFocusableElements().length).toBe(1);
  });

  it('should return focusable elements inside shadow DOM', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    div.shadowRoot.appendChild(button);

    const button1 = document.createElement('button');
    document.body.appendChild(button1);

    expect(getFocusableElements(div.shadowRoot).length).toBe(1);
  });
});
