import { getEventTarget } from '..';

describe('getEventTarget - return event target', () => {
  it('should return event target', () => {
    const mockTarget = document.createElement('button');
    const event = new Event('click', { bubbles: true });
    document.body.appendChild(mockTarget);

    document.addEventListener('click', () => {
      const element = getEventTarget(event);
      expect(element).toBe(mockTarget);
    });

    mockTarget.dispatchEvent(event);
  });

  it('should return event target with shadowRoot', () => {
    const div = document.createElement('div');
    div.attachShadow({ mode: 'open' });
    document.body.appendChild(div);

    const mockTarget = document.createElement('button');
    div.shadowRoot.appendChild(mockTarget);

    const event = new Event('click', { bubbles: true, composed: true });

    document.addEventListener('click', (evt) => {
      const target = getEventTarget(evt);
      expect(target).toBe(div);

      const realTarget = getEventTarget(evt, true);
      expect(realTarget).toBe(mockTarget);
    });

    mockTarget.dispatchEvent(event);
  });
});