import { loadScriptsSeries } from '..';

const flushPromises = () => new Promise(setImmediate);

describe('loadScriptsSeries - add scripts series into DOM', () => {
  it('should add scripts files', () => {
    const scripts = [
      'https://test1.js'
    ];
    loadScriptsSeries(scripts);

    const scriptEl = document.head.querySelector(`script[src="${scripts[0]}"]`) as any;
    expect(scriptEl).not.toBe(null);

    scriptEl.onload();
  });

  it('should add scripts files in order', async () => {
    const scripts = [
      'https://test-arr-1.js',
      'https://test-arr-2.js'
    ];

    const div = document.createElement('div');

    loadScriptsSeries(scripts, div);

    const scriptEl1 = div.querySelector(`script[src="${scripts[0]}"]`) as any;
    expect(scriptEl1).not.toBe(null);

    scriptEl1.onload();

    const scriptEl2 = div.querySelector(`script[src="${scripts[1]}"]`) as any;
    expect(scriptEl2).toBe(null);

    await flushPromises();

    const script2 = div.querySelector(`script[src="${scripts[1]}"]`) as any;
    expect(script2).not.toBe(null);
  });
});