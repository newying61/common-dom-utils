import { loadScriptWithSRI } from '..';

describe('loadScriptWithSRI - loading js file with SRI', () => {
  it('should load script', () => {
    const src = 'https://test.js';
    const promise = loadScriptWithSRI({
      src,
      integrity: 'sha256-BTlTdQO9/fascB1drekrDVkaKd9PkwBymMlHOiG+qLI=',
      crossorigin: 'anonymous'
    });

    const el = document.querySelector(`script[src="${src}"]`) as any;
    expect(el).not.toBe(null);

    expect(el.getAttribute('integrity')).toBe('sha256-BTlTdQO9/fascB1drekrDVkaKd9PkwBymMlHOiG+qLI=');
    expect(el.getAttribute('crossorigin')).toBe('anonymous');

    promise.then(() => {
      expect(el.getAttribute('integrity')).toBe('sha256-BTlTdQO9/fascB1drekrDVkaKd9PkwBymMlHOiG+qLI=');
      expect(el.getAttribute('crossorigin')).toBe('anonymous');
    });

    el.onload();
	});
});