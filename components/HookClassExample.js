import React from 'react';

class HookClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <Button
          onMouseEnter={() =>
            this.setState({ count: this.state.count + 1567332 })
          }
        >
          > CLICK HERE or
        </Button>
      </div>
    );
  }
}
export default HookClassExample;
