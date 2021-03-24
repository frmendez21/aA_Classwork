import ReactDOM from 'react-dom';
import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const tabsObj = [
    {title: "one",
    content: "first pane"
    },
    {title: "two",
    content: "second pane"
    },
    {title: "three",
    content: "third pane"
    }
];

const Root = (props) => {
    return (
        <div>
            <h1>Clock</h1>
            <Clock />
            <h1>Tabs</h1>
            <Tabs tabsObj={tabsObj} /> 
        </div>
    )
};

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    ReactDOM.render(<Root />, main)
});