class Timer {
  constructor(seconds) {
    // this.seconds = seconds;
  }

  start(seconds) {
    setInterval(() => {
      // if (seconds === 0) {
      //   clearInterval(timerInterval);
      // }

      console.log(seconds);
      seconds -= 1;
    }, 1000);
  }
}

export default Timer;
 