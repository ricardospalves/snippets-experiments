(function(win, doc) {
  'use strict';

  let setinterval;
  const unitTime = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  const maxTime = 60;
  const $stopwatch = doc.querySelector('[data-stopwatch="stopwatch"]');
  const $hours = $stopwatch.querySelector('[data-stopwatch="hours"]');
  const $minutes = $stopwatch.querySelector('[data-stopwatch="minutes"]');
  const $seconds = $stopwatch.querySelector('[data-stopwatch="seconds"]');
  const $toggle = $stopwatch.querySelector('[data-stopwatch="toggle"]');
  const $reset = $stopwatch.querySelector('[data-stopwatch="reset"]');
  const toggleStateAttrName = 'state';

  toggleState('play');
  $toggle.focus();

  $toggle.addEventListener('click', event => {
    const $this = event.target;
    const state = $this.getAttribute(toggleStateAttrName);

    if(state === 'play') {
      toggleState('pause');

      setinterval = setInterval(() => {
        ++unitTime.seconds;

        if(unitTime.seconds === maxTime) {
          unitTime.seconds = 0;
          ++unitTime.minutes;

          if(unitTime.minutes === maxTime) {
            unitTime.minutes = 0;
            ++unitTime.hours;

            $hours.textContent = unitTimeFormat(unitTime.hours);
          }

          $minutes.textContent = unitTimeFormat(unitTime.minutes);
        }


        $seconds.textContent = unitTimeFormat(unitTime.seconds);

      }, 1000);
    }

    else if(state === 'pause') {
      toggleState('play');
      clearInterval(setinterval);


    }
  }, false);

  $reset.addEventListener('click', () => {
    toggleState('play');
    clearInterval(setinterval);

    for(let unit in unitTime) {
      unitTime[unit] = 0;
    }

    $hours.textContent = unitTimeFormat(unitTime.hours);
    $minutes.textContent = unitTimeFormat(unitTime.minutes);
    $seconds.textContent = unitTimeFormat(unitTime.seconds);
    $toggle.focus();
  }, false);

  function toggleState(state) {
    if(state === 'play') {
      $toggle.setAttribute(toggleStateAttrName, 'play');
      $toggle.textContent = 'Play';
    }

    else if(state === 'pause') {
      $toggle.setAttribute(toggleStateAttrName, 'pause');
      $toggle.textContent = 'Pause';
    }
  }


  function unitTimeFormat(number) {
    if(number < 10)
      return `0${number}`;

    if(number === 60)
      return '00';

    return number;
  }

})(window, document);
