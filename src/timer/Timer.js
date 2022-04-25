function Timer(seconds) {
  this.seconds = seconds;
}

Timer.prototype.start = function () {
  const timerInterval = setInterval(function () {
    if (this.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(this.seconds);
    this.seconds -= 1;
  }, 1000);
};

export default Timer;
