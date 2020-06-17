/**
 * 
 * @param {Element} el 
 * @param {Element} container 
 */
export function prepend(el, container) {
  if (container.childElementCount) {
    container.insertBefore(el, container.firstElementChild);
  } else {
    container.appendChild(el);
  }
}