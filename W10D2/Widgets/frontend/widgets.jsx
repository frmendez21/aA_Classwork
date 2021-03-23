import ReactDOM from 'react-dom';
import React from 'react';
import Clock from './clock';

const Root = (props) => {
    return (
        <div>
            <h1>Clock</h1>
            <Clock />
        </div>
    )
};

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    ReactDOM.render(<Root />, main)
});