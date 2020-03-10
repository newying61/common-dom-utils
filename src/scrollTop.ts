import { scrollToPosition } from './scrollToPosition';

/*
 * Scroll to top
 *
 * @param {Number} duration Duration of the animation effect
 *
 */
export function scrollTop(duration = 0) {
  scrollToPosition(0, duration);
}
