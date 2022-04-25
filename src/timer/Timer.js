class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const startTimer = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(startTimer);
      }

      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}

export default Timer;
