class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    let instance = this.seconds;
    const timerInterval = setInterval(() => {
      if (instance === 0) {
        clearInterval(timerInterval);
      }

      console.log(instance);
      instance -= 1;    // the linter does not like instance--. WTF?
    }, 1000);
  }
}

export default Timer;
