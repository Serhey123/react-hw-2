import React, { Component } from 'react';

import Container from './components/Container/Container';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

class App extends Component {
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
      <React.StrictMode>
        <Container title={'Please leave feedback'}>
        <FeedbackOptions options={this.handleGood.bind(this)} />
        </Container>
        <Container title={'Statistics'}>
          {Object.values(this.state).some(e => e > 0) ?
          <Statistics 
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback(this.state)}
          positivePercentage={this.state.good
              ? this.countPositiveFeedbackPercentage(
                  this.countTotalFeedback(this.state),
                  this.state.good,
                )
              : '0%'}/> :
           <Notification message="There is no feedback"/>}
        </Container>
      </React.StrictMode>
    );
  }
}

export default App;
