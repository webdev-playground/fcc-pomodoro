/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="app">App</div>;
  }
}

function Duration(props) {
  return <div className="duration">Duration</div>;
}

function Countdown(props) {
  return <div className="countdown">Countdown</div>;
}

function Controls(props) {
  return <div className="controls">Controls</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
