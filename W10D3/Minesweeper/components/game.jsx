import React from 'react';
import Board from './board';

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: new Board (4, 5)
        }
    }

    render () {
        return (
            <div></div>
        )
    }
};