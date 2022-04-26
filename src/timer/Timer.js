class Timer {
  constuctor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const instance = this;
    const timerInterval = setInterval(() => {
      if (instance.seconds === 0) {
        clearInterval(timerInterval);
      }

      console.log(instance.seconds);
      instance.seconds -= 1;
    }, 1000);
  }
}

export default Timer;
