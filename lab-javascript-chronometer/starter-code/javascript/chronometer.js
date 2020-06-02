class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.minutes = 0;
    this.sec = 0;
    this.milSec = 0;
    this.intervalId;
    this.intervalMilSec;
  }
  startClick() {
    // if (this.currentTime) throw new Error("Stopwatch has already started.");
    this.intervalMilSec = setInterval(() => {
      this.milSec++;
      if (this.milSec > 99) this.milSec = 0;
      for (let i = 0; i < timer.length; i++) {
        let millSec = this.twoDigitsNumber(this.milSec);
        if (timer[i].id === 'milDec') {
          timer[i].innerHTML = millSec[0];
        } else if (timer[i].id === 'milUni') {
          timer[i].innerHTML = millSec[1];
        }
      }
    }, 1000 / 100);
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.sec++;
      if (this.sec > 59) this.sec = 0;
      for (let i = 0; i < timer.length; i++) {
        let minutes = this.twoDigitsNumber(this.getMinutes());
        let seconds = this.twoDigitsNumber(this.sec);
        if (timer[i].id === 'minDec') {
          timer[i].innerHTML = minutes[0];
        } else if (timer[i].id === 'minUni') {
          timer[i].innerHTML = minutes[1];
        } else if (timer[i].id === 'secDec') {
          timer[i].innerHTML = seconds[0];
        } else if (timer[i].id === 'secUni') {
          timer[i].innerHTML = seconds[1];
        }
      }
    }, 1000);
  }
  getMinutes() {
    this.minutes = Math.floor(this.currentTime / 60);
    return this.minutes;
  }
  twoDigitsNumber(val) {
    if (val >= 0 && val < 10) return (val = '0' + val.toString());
    else return val.toString();
  }
  stopClick() {
    // if (!this.currentTime) throw new Error("Stopwatch is not started.");
    clearInterval(this.intervalId);
    clearInterval(this.intervalMilSec);
  }
  resetClick() {
    this.currentTime = 0;
    this.minutes = 0;
    this.sec = 0;
    this.milSec = 0;
  }
  splitClick() {
    let num = 0;
    for (let i = 0; i < timer.length; i++) {
      if (i > 0) {
        num += timer[i].innerHTML;
      }
    }
    return num;
  }
}
