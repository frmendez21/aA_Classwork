import React from 'react';

export default class Weather extends React.Component {
    constructor(props) {
        super(props)

        this.getPos = this.getPos.bind(this);
      
    }

  
    getPos() {
    }

   

    render() {
        return (
        <button onClick={this.getPos}>Click</button>
        )
    }
}