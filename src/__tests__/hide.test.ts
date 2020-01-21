import { hide } from '..';

describe('hide - by setting element style display to none', () => {
  it('should add class to target', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    hide(div);
    expect(div.style.display).toBe('none');
  });

  it('should do nothing if el does not exist', () => {
    hide(null);
    // No exception
  });
});
