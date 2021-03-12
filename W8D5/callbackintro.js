class Clock {
    constructor () {
        let date = new Date();  
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(function() {
            this._tick();
        },1000);
    }
    printTime() {
        let dateString = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(dateString);
    }
    _tick() {
        if (this.seconds === 59) {
            this.seconds = 00;
            this.minutes += 1;
        } 
    }
}