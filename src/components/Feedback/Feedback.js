import { Component } from 'react';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleGood(name) {
    this.setState(state => ({ [name]: state[name] + 1 }));
  }

  countTotalFeedback({ good, neutral, bad }) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(total, good) {
    return `${Math.ceil(good / (total / 100))}%`;
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button
          data-btn="good"
          onClick={e => this.handleGood(e.target.dataset.btn)}
        >
          good
        </button>
        <button
          data-btn="neutral"
          onClick={e => this.handleGood(e.target.dataset.btn)}
        >
          neutral
        </button>
        <button
          data-btn="bad"
          onClick={e => this.handleGood(e.target.dataset.btn)}
        >
          bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>good {this.state.good}</li>
          <li>neutral {this.state.neutral}</li>
          <li>bad {this.state.bad}</li>
          <li>total {this.countTotalFeedback(this.state)}</li>
          <li>
            Positive feedback{' '}
            {this.state.good
              ? this.countPositiveFeedbackPercentage(
                  this.countTotalFeedback(this.state),
                  this.state.good,
                )
              : '0%'}
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
