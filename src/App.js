import React, { Component } from 'react';
import Button from './components/Button';
import './styles/Button.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container buttons">
          <Button>
            Button
          </Button>
          <div className="row small">
            <Button color='red' size="small">
              Button
            </Button>
            <Button color='orange' size="small">
              Button
            </Button>
            <Button color='yellow' size="small">
              Button
            </Button>
            <Button color='olive' size="small">
              Button
            </Button>
          </div>
          <div className="row medium">
            <Button color='green' size="medium">
              Button
            </Button>
            <Button color='teal' size="medium">
              Button
            </Button>
            <Button color='blue' size="medium">
              Button
            </Button>
            <Button color='violet' size="medium">
              Button
            </Button>
          </div>
          <div className="row large">
            <Button color='purple' size="large">
              Button
            </Button>
            <Button color='pink' size="large">
              Button
            </Button>
          </div>
          <div className="row wide">
            <Button color='brown' size="wide">
              Button
            </Button>
            <Button color='grey' size="wide">
              Button
            </Button>
          </div>
          <div className="row extra-wide">
            <Button color='black' size="extra-wide">
              Button
            </Button>
            <Button color='red' size="extra-wide">
              Button
            </Button>
          </div>
          <div className="row full-width">
            <Button color='white' size="full-width">
              Button
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
