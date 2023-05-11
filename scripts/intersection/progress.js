/**
 * @param {IntersectionObserverEntry[]} entries
 * @param {HTMLElement[]} sections
*/
export default function (entries, sections) {
  const visible = entries.find(e => e.isIntersecting);
  if (visible) {
    const index = sections.indexOf(visible.target);
    console.log(index);
  }
}