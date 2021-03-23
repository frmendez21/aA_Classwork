import React from 'react';

export default class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }

        this.tick = this.tick.bind(this);
    };

    tick () {
        this.setState({time: new Date()})
    };

    componentDidMount() {
        this.setIntervalId  = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.setIntervalId);
    }

    render () {
        const hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();
        let date = this.state.time.toString().slice(0, 15);
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return (
            <div className="clock">
                <div className="clock-time">
                    <span>Time:</span>
                    <span>{hours}:{minutes}:{seconds}</span>
                </div>
                <div className='clock-date'>
                    <span>Date:</span>
                    <span>{date}</span>
                </div>
            </div>

        )
    }
};