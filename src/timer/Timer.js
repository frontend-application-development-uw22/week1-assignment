class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const runTimer = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(runTimer);
      }
      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}

export default Timer;
