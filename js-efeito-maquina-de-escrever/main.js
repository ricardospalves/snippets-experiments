(function(win, doc) {
  'use strict';

  const $element = doc.querySelector('[data-typewriter="element"]');

  typewriterAnimation($element);

  function typewriterAnimation($element) {
    const text = $element.textContent;
    const textLength = text.length;
    let counter = 0;

    $element.textContent = '';

    const interval = setInterval(() => {

      if(counter >= textLength)
        clearInterval(interval);
      else {
        $element.textContent += text[counter];
        counter++;
      }

    }, 50);
  }

})(window, document);
