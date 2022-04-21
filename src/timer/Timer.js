class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }
      this.seconds -= 1;
      console.log(this.seconds);
    }, 1000);
  }
}

export default Timer;
