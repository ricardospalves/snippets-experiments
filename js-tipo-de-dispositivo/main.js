(function(win, doc) {
  'use strict';

  const $output = doc.querySelector('[data-device-type="output"]');
  const deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'mobile' : 'desktop';

  $output.innerHTML = `Você está em um dispositivo do tipo <strong>${deviceType}</strong>`;

})(window, document);
