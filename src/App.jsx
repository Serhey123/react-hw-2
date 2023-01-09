import React, { Component } from 'react';

import Container from './components/Container/Container';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = (name) => {
    this.setState(state => ({ [name]: state[name] + 1 }));
  }

  render() {
    const { good, neutral, bad } = this.state
    const totalFeedback = good + neutral + bad
    const positivePrecentage = `${Math.ceil(good / (totalFeedback / 100))}%`

    return (
      <React.StrictMode>
        <Container title={'Please leave feedback'}>
        <FeedbackOptions options={this.handleBtn} />
        </Container>
        <Container title={'Statistics'}>
          {Object.values(this.state).some(e => e > 0) ?
          <Statistics 
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalFeedback}
          positivePercentage={this.state.good ? positivePrecentage : '0%'}/> :
          <Notification message="There is no feedback"/>}
        </Container>
      </React.StrictMode>
    );
  }
}

export default App;
