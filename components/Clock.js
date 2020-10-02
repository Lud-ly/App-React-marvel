import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div style={{ 'text-align': 'center' }}>
        <h1>
          CAPTAIN CODE {this.state.date.toLocaleTimeString()} this clock is a
          component !
        </h1>
        <h4>Try me on homepage and search all repositories GITHUB</h4>
      </div>
    );
  }
}

export default Clock;
