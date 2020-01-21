import { show } from '..';

describe('show - by setting element style display to empty', () => {
  it('should add class to target', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    div.style.display = 'none';

    show(div);
    expect(div.style.display).toBe('');
  });

  it('should do nothing if el does not exist', () => {
    show(null);
    // No exception
  });
});
