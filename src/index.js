/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';

function secondsToMMSS(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = secs % 60;
  const mm = minutes < 10 ? `0${minutes.toString()}` : minutes.toString();
  const ss = seconds < 10 ? `0${seconds.toString()}` : seconds.toString();

  return `${mm}:${ss}`;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const timeLeftInSeconds = 25 * 60;
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
        <Countdown
          label="Session"
          timeLeft={timeLeftInSeconds}
          labelID="timer-label"
          timeLeftID="time-left"
        />
        <Controls startStopID="start_stop" resetID="reset" />
      </div>
    );
  }
}

function Duration({ label, value, labelID, decrementID, incrementID, durationID }) {
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
  durationID: PropTypes.string.isRequired
};

function Countdown({ label, timeLeft, labelID, timeLeftID }) {
  const timeLeftMMSS = secondsToMMSS(timeLeft);
  return (
    <div className="countdown">
      <div id={labelID} className="countdown__label">
        {label}
      </div>
      <div id={timeLeftID} className="countdown__time-left">
        {timeLeftMMSS}
      </div>
    </div>
  );
}

Countdown.propTypes = {
  label: PropTypes.string.isRequired,
  timeLeft: PropTypes.number.isRequired,
  labelID: PropTypes.string.isRequired,
  timeLeftID: PropTypes.string.isRequired
};

function Controls({ startStopID, resetID }) {
  return (
    <div className="controls">
      <div className="controls__start-stop">
        <button id={startStopID} type="submit">
          Start/Stop
        </button>
      </div>
      <div className="controls__reset">
        <button id={resetID} type="submit">
          Reset
        </button>
      </div>
    </div>
  );
}

Controls.propTypes = {
  startStopID: PropTypes.string.isRequired,
  resetID: PropTypes.string.isRequired
};

ReactDOM.render(<App />, document.getElementById('root'));
