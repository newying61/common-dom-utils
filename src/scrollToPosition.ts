// Timing function
function easeInOutQuad(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) {
      return c / 2 * t * t + b;
  }
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

/*
 *
 * Scroll to postision using an easeInOut easing animation
 *
 * @param {Number} position to scroll to
 * @param {Number} duration Duration of the animation effect
 *
 */
export function scrollToPosition(
  position: number,
  duration: number = 0,
  callback: () => void = null) {
    const start = window.pageYOffset;
    const to = position;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;

  var animateScroll = function animateScroll() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      window.scrollTo(0, val);

      if (currentTime < duration) {
          setTimeout(animateScroll, increment);
      } else {
          if (callback) {
              callback();
          }
      }
  };

  if (duration > 0) {
      animateScroll();
  } else {
      window.scrollTo(0, to);
      if (callback) {
          callback();
      }
  }
}
