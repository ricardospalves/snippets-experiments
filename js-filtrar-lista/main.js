(function(win, doc) {
  'use strict';

  const $input = doc.querySelector('[data-filter-list="input"]');
  const $list = doc.querySelector('[data-filter-list="list"]');
  const $listItems = $list.querySelectorAll('li');

  $input.addEventListener('input', event => {

    const inputValue = event.target.value;
    const regex = new RegExp(inputValue, 'i');

    Array.from($listItems).forEach(item => {
      const itemValue = item.textContent;

      if( regex.test(itemValue) ) {
        item.style.display = '';

        item.innerHTML = itemValue.replace(new RegExp(`(${inputValue})`, 'gi'), '<mark>$1</mark>');
      }

      else {
        item.style.display = 'none';
      }
    });

  }, false);

})(window, document);
