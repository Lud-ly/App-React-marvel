import React, { Component } from 'react';

class AgeDrinking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }

  // this.checkAge is passed as the callback to setState
  updateAge = value => {
    this.setState({ age: value }, this.checkAge);
  };

  checkAge = () => {
    const { age } = this.state;
    if (age !== 0 && age >= 21) {
      // Make API call to /beer
    } else {
      // Throw error 404, beer not found
    }
  };

  render() {
    const { age } = this.state;
    return (
      <div>
        <p>Drinking Age Checker</p>
        <input
          type="number"
          value={age}
          onChange={e => this.updateAge(e.target.value)}
        />
      </div>
    );
  }
}

export default AgeDrinking;
