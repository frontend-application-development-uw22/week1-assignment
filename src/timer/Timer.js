function Timer(seconds) {
  this.seconds = seconds;
}

Timer.prototype.start = () => {
  var instance = this;
  var timerInterval = setInterval(() => {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

export default Timer;
