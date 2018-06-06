(function(win, doc) {
  'use strict';

  const $megasenaRandom = {
    button: doc.querySelector('[data-megasena-random="button"]'),
    output: doc.querySelector('[data-megasena-random="output"]')
  };

  $megasenaRandom.button.addEventListener('click', event => {
    const range = [];

    while(range.length < 6) {
      const randomNumber = Math.ceil( ( Math.random() || 1 ) * 60 );

      if( range.indexOf(randomNumber) > -1 )
        continue;

      range.push(randomNumber);
    }

    $megasenaRandom.output.value = range.sort((a, b) => a - b).join(' - ');
  }, false);

})(window, document);
