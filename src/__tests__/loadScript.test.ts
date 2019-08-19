import { loadScript } from '..';

describe('loadScript - loading js file', () => {
  it('should load script', () => {
    const src = 'https://test.js';
    const promise = loadScript(src);

    const el = document.querySelector(`script[src="${src}"]`) as any;
    expect(el).not.toBe(null);

    promise.then(() => {
      expect(el.onload).toBeNull();
      expect(el.onerror).toBeNull();
    });

    el.onload();
  });

  it('should load script into container', () => {
    const container = document.createElement('div');
    const src = 'https://test-container.js';
    loadScript(src, container);

    const el = container.querySelector(`script[src="${src}"]`) as any;
    expect(el).not.toBe(null);

    el.onload();
});

it('should reject promise when script load failed', () => {
    const src = 'https://test-error.js';
    const promise = loadScript(src);

    const el = document.querySelector(`script[src="${src}"]`) as any;
    expect(el).not.toBe(null);

    promise.catch(err => {
      expect(err).not.toBe(null);

      // check clean up
      expect(el.onload).toBeNull();
      expect(el.onerror).toBeNull();
    });

    el.onerror({ type: 'error' });
  });

  it('should reject with error type', () => {
    const src = 'https://test-error-type.js';
    const promise = loadScript(src);

    const el = document.querySelector(`script[src="${src}"]`) as any;
    expect(el).not.toBe(null);

    el.onerror({ type: 'script-error' });

    promise.catch(err => {
      expect(err.toString()).toBe(`Error: Loading script error - script-error for ${src}`);
    });
  });

  it('should trigger global error', () => {
    const src = 'https://test-global-error.js';
    const promise = loadScript(src);

    window.dispatchEvent(new CustomEvent('error', { detail: 'test' }));
    const el = document.querySelector(`script[src="${src}"]`) as any;

    el.onload();

    promise.catch(error => {
      expect(error.detail).toBe('test');
    });
  });

  it('should timeout for loading script', () => {
    jest.useFakeTimers();

    const src = 'https://test-time-out.js';
    const promise = loadScript(src);

    const el = document.querySelector(`script[src="${src}"]`);

    expect(el).not.toBe(null);
    expect(setTimeout).toHaveBeenCalledTimes(1);

    jest.runAllTimers();

    promise.catch(error => {
      expect(error.toString()).toBe(`Error: Loading script error - timeout for src: ${src}`);
    });
  });
});
