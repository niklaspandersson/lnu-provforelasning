import updateProgress from './progress.js';
import handleVisibility from '../visibility.js';

export default function init() {
  const sections = Array.from(document.body.querySelectorAll("& > section"));

  const observer = new IntersectionObserver((entries) => {
    updateProgress(entries, sections);
    handleVisibility(entries, sections);
  }, {
    threshold: .5
  });

  sections.forEach(el => observer.observe(el));
}