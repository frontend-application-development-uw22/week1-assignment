class Timer {
  constructor(seconds){
  this.seconds = seconds;
  }
}

Timer.prototype.start = function () {
  var instance = this;
  console.log(instance);
  var timerInterval = setInterval(()=> {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

export default Timer;
