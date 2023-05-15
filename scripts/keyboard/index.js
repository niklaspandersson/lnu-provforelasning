const handlers = new Map();

/**
 * 
 * @param {HTMLBaseElement} section 
 * @returns 
 */
export function setup(section) {
  const advance = (ev) => {
    if (ev === undefined || ev.key === 'ArrowDown') {
      const hiddenElements = Array.from(section.getElementsByClassName("hidden"));
      if (hiddenElements.length) {
        hiddenElements[0].classList.remove('hidden');
        ev?.preventDefault();
      }

      if (hiddenElements.length <= 1) {
        section.classList.add('complete');
      }
    }
  }

  handlers.set(section, advance);
  document.body.addEventListener('keydown', advance);
  return advance;
}

export function cleanup(section) {
  if (handlers.has(section)) {
    const handler = handlers.get(section);
    document.body.removeEventListener('keydown', handler);
    handlers.delete(section);
  }
}