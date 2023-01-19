import React, { useReducer } from 'react';

import Container from './components/Container/Container';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

function countReducer(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + action.payload };
    case 'neutral':
      return { ...state, neutral: state.neutral + action.payload };
    case 'bad':
      return { ...state, bad: state.bad + action.payload };
    default:
      return;
  }
}

function App() {
  const [state, dispatch] = useReducer(countReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleBtn = name => {
    dispatch({ type: `${name}`, payload: 1 });
  };

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;
  const positivePrecentage = `${Math.ceil(good / (totalFeedback / 100))}%`;

  return (
    <React.StrictMode>
      <Container title={'Please leave feedback'}>
        <FeedbackOptions handleBtn={handleBtn} />
      </Container>
      <Container title={'Statistics'}>
        {[good, neutral, bad].some(e => e > 0) ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={state.good ? positivePrecentage : '0%'}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    </React.StrictMode>
  );
}

export default App;
