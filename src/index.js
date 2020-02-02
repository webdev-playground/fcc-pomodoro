/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Pomodoro Clock</h1>
        <Duration
          label="Break Length"
          value={5}
          labelID="break-label"
          decrementID="break-decrement"
          incrementID="break-increment"
          durationID="break-length"
        />
        <Duration
          label="Session Length"
          value={25}
          labelID="session-label"
          decrementID="session-decrement"
          incrementID="session-increment"
          durationID="session-length"
        />
      </div>
    );
  }
}

function Duration({
  label,
  value,
  labelID,
  decrementID,
  incrementID,
  durationID,
}) {
  return (
    <div className="duration">
      <div id={labelID} className="duration__label">
        {label}
      </div>
      <div className="duration__controls">
        <button id={decrementID} className="duration__button" type="submit">
          -
        </button>
        <div id={durationID} className="duration__value">
          {value}
        </div>
        <button id={incrementID} className="duration__button" type="submit">
          +
        </button>
      </div>
    </div>
  );
}

Duration.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  labelID: PropTypes.string.isRequired,
  decrementID: PropTypes.string.isRequired,
  incrementID: PropTypes.string.isRequired,
  durationID: PropTypes.string.isRequired,
};

function Countdown(props) {
  return <div className="countdown">Countdown</div>;
}

function Controls(props) {
  return <div className="controls">Controls</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
