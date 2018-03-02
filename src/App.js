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
          <Header size="h1">Small Buttons</Header>
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
          <Header size="h1">Medium Buttons</Header>
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
          <Header size="h1">Large Buttons</Header>
          <div className="ele row equal large">
            <Button color='purple' size="large">
              Button
            </Button>
            <Button color='pink' size="large">
              Button
            </Button>
          </div>
          <Header size="h1">Wide Buttons</Header>
          <div className="ele row equal wide">
            <Button color='brown' size="wide">
              Button
            </Button>
            <Button color='grey' size="wide">
              Button
            </Button>
          </div>
          <Header size="h1">Extra Wide Buttons</Header>
          <div className="ele row equal extra-wide">
            <Button color='black' size="extra-wide">
              Button
            </Button>
            <Button color='red' size="extra-wide">
              Button
            </Button>
          </div>
          <Header size="h1">Full-Width & Raised Buttons</Header>
          <div className="ele row equal full-width">
            <Button color='white' size="full-width" raised>
              Button
            </Button>
          </div>
        </div>
        <div className="ele container">
          <Header size="h1">Header H1</Header>
          <Header size="h2">Header H2</Header>
          <Header size="h3">Header H3</Header>
          <Header size="h4">Header H4</Header>
          <Header size="h5">Header H5</Header>
        </div>
      </div>
    );
  }
}

export default App;
