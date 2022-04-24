class Timer {
    constructor(seconds) {
        this.seconds = seconds;
    };

    start() {
        let instance = this.seconds;
        let timerInterval = setInterval(() => {
            if(instance === 0) {
                clearInterval(timerInterval)
            }

            console.log(instance);
            instance--;
        }, 1000);
    }
}

export default Timer;
