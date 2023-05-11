import updateProgress from './progress.js';
import handleVisibility from './visibility.js';

const sections = Array.from(document.querySelectorAll("section"));

const observer = new IntersectionObserver((entries) => {
  updateProgress(entries, sections);
  handleVisibility(entries, sections);
}, {
  threshold: .5
});

sections.forEach(el => observer.observe(el));