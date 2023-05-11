/**
 * @param {IntersectionObserverEntry[]} entries
 * @param {HTMLElement[]} sections
*/
export default function (entries, sections) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
    else {
      entry.target.classList.remove("visible");
    }
  })
}