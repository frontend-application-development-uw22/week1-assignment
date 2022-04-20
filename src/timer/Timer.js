class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    this.runTimer = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(this.runTimer);
      }
      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}

export default Timer;
