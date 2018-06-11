(function(win, doc) {
  'use strict';

  const $button = doc.querySelector('[data-random-avatar="button"]');
  const $avatar = doc.querySelector('[data-random-avatar="avatar"]');
  const $avatarDots = $avatar.querySelectorAll('[data-random-avatar="dot"]');
  const className = 'is-on';

  toggleDots();

  $button.addEventListener('click', () => {
    toggleDots();
  }, false);

  function toggleDots() {
    Array.from($avatarDots).forEach( $dot => {
      (Math.round(Math.random())) ? $dot.classList.add(className) : $dot.classList.remove(className);
    });
  }

})(window, document);
