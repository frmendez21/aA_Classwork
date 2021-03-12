//CLOCK

class Clock {
    constructor () {
        let date = new Date();  
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(() => {
            this._tick();
        },1000);
    }
    printTime() {
        let dateString = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(dateString);
    }
    _tick() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;
                this.hours %= 24;
            }
        }
        this.printTime(); 
    }
}

// let clock = new Clock();

// addNumbers

const readline = require('readline');

const reader = readline.createInterface({
    // it's okay if this part is magic; it just says that we want to
    // 1. output the prompt to the standard output (console)
    // 2. read input from the standard input (again, console)

    input: process.stdin,
    output: process.stdout
});

function addNumbers()
