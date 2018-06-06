(function(win, doc) {
  'use strict';

  const $button = doc.querySelector('[data-clipboard="button"]');
  const $content = doc.querySelector('[data-clipboard="content"]');

  $button.addEventListener('click', event => {
    const $this = event.target;
    const value = $content.value;

    $content.focus();
    $content.select();
    doc.execCommand('copy');
    $this.textContent = 'Copiado';

  }, false);

})(window, document);
