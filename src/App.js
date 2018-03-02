import React, { Component } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ele container">
          <Header size="h1">Default Buttons</Header>
          <div className="ele row equal default">
            <Button>
              Button
            </Button>
            <Button color="red">
              Button
            </Button>
          </div>
          <div className="ele row equal small">
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
          <div className="ele row equal medium">
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
          <div className="ele row equal large">
            <Button color='purple' size="large">
              Button
            </Button>
            <Button color='pink' size="large">
              Button
            </Button>
          </div>
          <div className="ele row equal wide">
            <Button color='brown' size="wide">
              Button
            </Button>
            <Button color='grey' size="wide">
              Button
            </Button>
          </div>
          <div className="ele row equal extra-wide">
            <Button color='black' size="extra-wide">
              Button
            </Button>
            <Button color='red' size="extra-wide">
              Button
            </Button>
          </div>
          <div className="ele row equal full-width">
            <Button color='white' size="full-width" raised>
              Button
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
