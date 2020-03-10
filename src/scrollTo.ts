import { scrollToPosition } from './scrollToPosition';

/*
 * Scroll an element using easeInOut easing animation
 *
 * @param {object} anchor DOM element to scroll to
 * @param {Number} duration Duration of the animation effect
 *
 */
export function scrollTo(anchor: HTMLElement, duration = 0) {
  if (!anchor) {
    return;
  }

  const rect = anchor.getBoundingClientRect();
  const to = rect.top + window.pageYOffset;

  scrollToPosition(to, duration);
}
