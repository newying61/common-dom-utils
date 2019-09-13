import { html } from '..';

describe('html - get element html', () => {
  it('should return target html string', () => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.appendChild(span);

    const str = html(div);

    expect(str).toBe('<span></span>');
  });

  it('should set html string to target', () => {
    const div = document.createElement('div');

    html(div, '<span>test</span>');

    expect(div.innerHTML).toBe('<span>test</span>');
  });

  it('should return empty if target does not exist', () => {
    const str = html(null);
    expect(str).toBe('');
  });

  it('should not set html string if second param is undefined', () => {
    const div = document.createElement('div');

    html(div, undefined);

    expect(div.innerHTML).toBe('');
  });

  it('should not set html string if second param is not string', () => {
    const div = document.createElement('div');

    html(div, null);

    expect(div.innerHTML).toBe('');
  });
});
