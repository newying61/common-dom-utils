import { setFocus } from '..';

describe('setFocus - set focus for element', () => {
  it('should set focus', () => {
    const button = document.createElement('button');
    document.body.appendChild(button);

    setFocus(button);

    expect(document.activeElement).toBe(button);
  });

  it('should not throw exception if element does not exist', () => {
    try {
      setFocus(null);
    } catch(e) {
      fail('should not come here');
    }
  });
});