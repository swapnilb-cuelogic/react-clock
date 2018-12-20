import React, { Component } from 'react';

class Clock extends Component {
    
    state = { date:  new Date() }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }
    render(){
       return <p>{this.state.date.toLocaleTimeString()}</p>
    }
}

export default Clock;