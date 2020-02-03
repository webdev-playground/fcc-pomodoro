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
    this.state = {
      defaultBreakLength: 5,
      defaultSessionLength: 25,
      breakLength: 5,
      sessionLength: 25,
      timeLeftInSeconds: 25 * 60
    };

    this.handleDecrementBreakLength = this.handleDecrementBreakLength.bind(this);
    this.handleDecrementSessionLength = this.handleDecrementSessionLength.bind(this);
    this.handleIncrementBreakLength = this.handleIncrementBreakLength.bind(this);
    this.handleIncrementSessionLength = this.handleIncrementSessionLength.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleDecrementBreakLength() {
    this.setState(state => ({
      breakLength: Math.max(1, state.breakLength - 1)
    }));
  }

  handleDecrementSessionLength() {
    this.setState(state => ({
      sessionLength: Math.max(1, state.sessionLength - 1)
    }));
  }

  handleIncrementBreakLength() {
    this.setState(state => ({
      breakLength: Math.min(60, state.breakLength + 1)
    }));
  }

  handleIncrementSessionLength() {
    this.setState(state => ({
      sessionLength: Math.min(60, state.sessionLength + 1)
    }));
  }

  handleReset() {
    this.setState(state => ({
      breakLength: state.defaultBreakLength,
      sessionLength: state.defaultSessionLength
    }));
  }

  render() {
    const { timeLeftInSeconds, breakLength, sessionLength } = this.state;
    return (
      <div className="app">
        <h1 className="app__title">Pomodoro Clock</h1>
        <Duration
          label="Break Length"
          value={breakLength}
          labelID="break-label"
          decrementID="break-decrement"
          incrementID="break-increment"
          durationID="break-length"
          onDecrementClick={this.handleDecrementBreakLength}
          onIncrementClick={this.handleIncrementBreakLength}
        />
        <Duration
          label="Session Length"
          value={sessionLength}
          labelID="session-label"
          decrementID="session-decrement"
          incrementID="session-increment"
          durationID="session-length"
          onDecrementClick={this.handleDecrementSessionLength}
          onIncrementClick={this.handleIncrementSessionLength}
        />
        <Countdown
          label="Session"
          timeLeft={timeLeftInSeconds}
          labelID="timer-label"
          timeLeftID="time-left"
        />
        <Controls startStopID="start_stop" resetID="reset" onResetClick={this.handleReset} />
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
  onDecrementClick,
  onIncrementClick
}) {
  return (
    <div className="duration">
      <div id={labelID} className="duration__label">
        {label}
      </div>
      <div className="duration__controls">
        <button
          id={decrementID}
          className="duration__button"
          type="submit"
          onClick={onDecrementClick}
        >
          -
        </button>
        <div id={durationID} className="duration__value">
          {value}
        </div>
        <button
          id={incrementID}
          className="duration__button"
          type="submit"
          onClick={onIncrementClick}
        >
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
  onDecrementClick: PropTypes.func.isRequired,
  onIncrementClick: PropTypes.func.isRequired
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

function Controls({ startStopID, resetID, onResetClick }) {
  return (
    <div className="controls">
      <div className="controls__start-stop">
        <button id={startStopID} type="submit">
          Start/Stop
        </button>
      </div>
      <div className="controls__reset">
        <button id={resetID} type="submit" onClick={onResetClick}>
          Reset
        </button>
      </div>
    </div>
  );
}

Controls.propTypes = {
  startStopID: PropTypes.string.isRequired,
  resetID: PropTypes.string.isRequired,
  onResetClick: PropTypes.func.isRequired
};

ReactDOM.render(<App />, document.getElementById('root'));
