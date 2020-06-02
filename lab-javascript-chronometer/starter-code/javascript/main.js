let chronometer = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let splits = document.getElementById('splits');
let timer = document.querySelectorAll('#sphere span');

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP';
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    chronometer.startClick();
    btnRight.innerHTML = 'SPLIT';
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
  } else if (btnLeft.innerHTML === 'STOP') {
    btnLeft.innerHTML = 'START';
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    chronometer.stopClick();
    btnRight.innerHTML = 'RESET';
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (btnRight.innerHTML === 'SPLIT') {
    splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
  }
  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();
    splits.innerHTML = '';
    for (let i = 0; i < timer.length; i++) {
      if (timer[i].innerHTML !== ':') timer[i].innerHTML = 0;
    }
  }
});
