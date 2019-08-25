import { getRootNode } from './setRootNode';

export function querySelector(selector: string) {
  return getRootNode().querySelector(selector);
}
