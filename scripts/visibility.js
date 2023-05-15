import { setup, cleanup } from './keyboard/index.js';

export function init() {
  const animated = document.querySelectorAll(".animate");
  animated.forEach(el => el.classList.add("hidden"));
}

/**
 * @param {IntersectionObserverEntry[]} entries
*/
export default function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      const advance = setup(entry.target);
      advance();
    }
    else {
      entry.target.classList.remove("visible");
      entry.target.classList.remove("complete");
      const animated = entry.target.querySelectorAll(".animate");
      animated.forEach(el => el.classList.add("hidden"));
      cleanup(entry.target);
    }
  })
}