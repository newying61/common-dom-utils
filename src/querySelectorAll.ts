import { getRootNode } from './setRootNode';

export function querySelectorAll(selector: string) {
  return getRootNode().querySelectorAll(selector);
}
