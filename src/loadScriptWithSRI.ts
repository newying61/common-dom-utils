import { loadScript } from './loadScript';

export interface ScriptType {
  src: string;
  integrity: string;
  crossorigin: string;
}

export function loadScriptWithSRI(
  { src, integrity, crossorigin }: ScriptType,
  container: HTMLElement = document.head) {
    return loadScript(src, container, {
      integrity,
      crossorigin
    });
}
