import { querySelector } from "./querySelector";
import { querySelectorAll } from "./querySelectorAll";
import { getActiveElement } from './getActiveElement';
import { setFocus } from './setFocus';
import { getEventTarget } from './getEventTarget';

export interface DomUtilsForShadowRoot {
  querySelector: (selector: string) => HTMLElement;
  querySelectorAll: (selector: string) => NodeListOf<Element>;
  getActiveElement: () => HTMLElement;
  setFocus: () => void;
  getEventTarget: (evt: Event) => HTMLElement;
}

export function createDomUtilsForShadowRoot(shadowRoot: ShadowRoot|HTMLElement): DomUtilsForShadowRoot {
  return {
    querySelector: (selector: string) => {
      return querySelector(selector, shadowRoot);
    },
    querySelectorAll: (selector: string) => {
      return querySelectorAll(selector, shadowRoot);
    },
    getActiveElement: () => {
      return getActiveElement(true);
    },
    setFocus: (el: HTMLElement) => {
      setFocus(el);
    },
    getEventTarget: (evt: Event) => {
      return getEventTarget(evt, true);
    },
  } as unknown as DomUtilsForShadowRoot;
}