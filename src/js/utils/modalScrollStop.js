const preventDefault = ev => {
  ev.preventDefault();
}
const scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';

export function addScrollStop() {
  document.addEventListener('touchmove', preventDefault, {passive: false});
  document.addEventListener(scroll_event, preventDefault);
}

export function removeScrollStop() {
  document.removeEventListener('touchmove', preventDefault, {passive: false});
  document.removeEventListener(scroll_event, preventDefault);
}
