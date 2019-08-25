export function loadScript(
  src: string,
  container: HTMLElement = document.head,
  attributes: any = null) {
    // Return a promise for loading script
    return new Promise((resolve, reject) => {
      const scriptEl = document.createElement('script');
      scriptEl.src = src;

      if (attributes) {
        Object.keys(attributes).forEach(key => {
          scriptEl.setAttribute(key, attributes[key]);
        });
      }

      let timeout: any;
      let err: Error;

      function onScriptError(e: any) {
        window.removeEventListener('error', onScriptError);
        err = e;
      }

      function cleanup() {
        scriptEl.onerror = null;
        scriptEl.onload = null;
        clearTimeout(timeout);
        window.removeEventListener('error', onScriptError);
      }

      function onLoadComplete() {
        cleanup();

        if (err) {
          reject(err);
        }

        resolve();
      }

      function onLoadError(e: any) {
        cleanup();

        const errorType = e && (e.type === 'load' ? 'js-missing' : e.type);
        const error = new Error(`Loading script error - ${errorType} for ${src}`);
        reject(error);
      }

      scriptEl.onload = onLoadComplete;
      scriptEl.onerror = onLoadError;

      // script parsing error will be triggered in window
      window.addEventListener('error', onScriptError);

      // Add script elment into container
      container.appendChild(scriptEl);

      timeout = setTimeout(() => {
        onScriptError({ type: 'timeout' });
      }, 15000);
    });
}
