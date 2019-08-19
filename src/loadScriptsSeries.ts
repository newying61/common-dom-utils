import loadScript from './loadScript';

export default async function loadScriptsSeries(scripts: string, container: HTMLElement = document.head) {
  for(let i = 0, j = scripts.length; i < j; i++) {
    await loadScript(scripts[i], container);
  }
}
