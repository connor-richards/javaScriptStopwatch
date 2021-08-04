// run the code with webpage
window.onload = function() {
  let seconds = '00', centi = '00';
  let secondVal = document.getElementById('seconds');
  let centiVal = document.getElementById('centi');
  let startButton = document.getElementById('start');
  let stopButton = document.getElementById('stop');
  let resetButton = document.getElementById('reset');
  let interval;

  // start timer
  startButton.onclick = function() {
    // set interval object to run function every 10 ms
    clearInterval(interval);
    interval = setInterval(runTimer, 10)
  }

  // stop timer, cancel interval function
  stopButton.onclick = function() {
    clearInterval(interval);
  }

  // reset timer
  resetButton.onclick = function() {
    clearInterval(interval);
    
    seconds = '00';
    centi = '00';
    secondVal.innerHTML = seconds;
    centiVal.innerHTML = centi;
  }

  // timing function, updates page's values based on time passed
  function runTimer() {
    // count up an increment
    centi++;

    // set seconds and centiseconds values'
    if (centi <= 9) {
      centiVal.innerHTML = '0' + centi;
    }
    else {
      centiVal.innerHTML = centi;

      if (centi > 99) {
        seconds++;
        console.log("full seconds passed:" + seconds);

        if (seconds <= 9) {
          secondVal.innerHTML = '0' + seconds;
        }
        else {
          secondVal.innerHTML = seconds;
        }
        centi = 0;
        centiVal.innerHTML = '00';
      }
    }
  }
}