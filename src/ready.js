/**
 * @desc ready() uses mutation observers to find elements inserted asap
 *
 * @param {String} selector - selector of element to poll for
 * @param {String} callback - callback to run on element
 *
 * @return {undefined}
 */

// adapted from
// http://ryanmorr.com/using-mutation-observers-to-watch-for-element-availability/

'use strict';
const listeners = [];
const doc = window.document;
const MO = window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;

// Watch for changes in the document
const observer = new MO(check);
observer.observe(doc.documentElement, {
  childList: true,
  subtree: true
});

Object.assign(ready, {
  listeners,
  observer
});

/*jshint latedef:false*/
function ready(selector, fn) {
  // Store the selector and callback to be monitored
  listeners.push({
    selector: selector,
    fn: fn
  });
  // Check if the element is currently in the DOM
  check();
}

function check() {
  // Check the DOM for elements matching a stored selector
  for (let i = 0, len = listeners.length, listener, elements; i < len; i++) {
    listener = listeners[i];
    // Query for elements matching the specified selector
    elements = doc.querySelectorAll(listener.selector);
    for (let j = 0, jLen = elements.length, element; j < jLen; j++) {
      element = elements[j];
      // Make sure the callback isn't invoked with the
      // same element more than once
      if (!element.ready) {
        element.ready = true;
        // Invoke the callback with the element
        listener.fn.call(element, element);
      }
    }
  }
}

export default ready;
