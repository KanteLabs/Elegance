import React, { Component } from 'react';
import Button from './components/Button';
import './styles/Button.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container buttons">
          <div className="row small">
          </div>
          <div className="row medium">
          </div>
          <div className="row large">
          </div>
          <div className="row wide">
          </div>
          <div className="row extra-wide">
          </div>
          <div className="row full-width">
          </div>
          <Button>
            Click Me!
          </Button>
          <Button color='red' size="small">
            Click Me!
          </Button>
          <Button color='orange' size="medium">
            Click Me!
          </Button>
          <Button color='yellow'>
            Click Me!
          </Button>
          <Button color='olive'>
            Click Me!
          </Button>
          <Button color='green'>
            Click Me!
          </Button>
          <Button color='teal'>
            Click Me!
          </Button>
          <Button color='blue'>
            Click Me!
          </Button>
          <Button color='violet'>
            Click Me!
          </Button>
          <Button color='purple'>
            Click Me!
          </Button>
          <Button color='pink'>
            Click Me!
          </Button>
          <Button color='brown'>
            Click Me!
          </Button>
          <Button color='grey'>
            Click Me!
          </Button>
          <Button color='black'>
            Click Me!
          </Button>
          <Button color='white'>
            Click Me!
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
