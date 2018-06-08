(function(win, doc) {
  'use strict';

  const $counter = doc.querySelector('[data-char-remaining="counter"]');
  const $input = doc.querySelector($counter.getAttribute('data-char-remaining-input'));
  const inputValue = getInputValueLength();
  const limit = $counter.getAttribute('data-char-remaining-limit');

  $input.setAttribute('maxlength', limit);
  $counter.value = counterValue(inputValue);

  $input.addEventListener('input', event => {
    $counter.value = counterValue(getInputValueLength());
  }, false);

  function getInputValueLength() {
    return $input.value.length;
  }

  function counterValue(inputValue) {
    return limit - inputValue;
  }

})(window, document);
