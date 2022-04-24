// function Timer(seconds) {
//   this.seconds = seconds;
// }

// Timer.prototype.start = function () {
//   const instance = Timer();
//   const timerInterval = () => {
//     setInterval(() => {
//       if (instance.seconds === 0) {
//         clearInterval(timerInterval);
//       }

//       console.log(instance.seconds);
//       instance.seconds -= 1;
//     }, 1000);
//   };
//   return timerInterval;
// };

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    /* this is the equivalent of let seconds = this.seconds
    but this is as an object */
    let { seconds } = this.seconds;
    const timerInterval = setInterval(() => {
      if (seconds === 0) {
        clearInterval(timerInterval);
      } else {
        seconds -= 1;
      }
    }, 1000);
  }
}

export default Timer;
