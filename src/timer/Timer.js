function Timer(seconds) {
  this.seconds = seconds;
}

Timer.prototype.start = () => {
  const instance = this;
  const timerInterval = setInterval(() => {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }
    // eslint-disable-next-line no-console
    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

export default Timer;
