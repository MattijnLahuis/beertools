import React, { PureComponent } from 'react';

class App extends PureComponent {
  render() {

    return (
      <ul>
        {this.props.text.split("\n").map((i, index) => {
            return <li key={index}>{i}</li>;
        })}
      </ul>
    )
  }
}

export default App;
