import React, { Component } from 'react';
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container buttons">
          <Button>
            Click Me!
          </Button>
          <Button color='red'>
            Click Me!
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
