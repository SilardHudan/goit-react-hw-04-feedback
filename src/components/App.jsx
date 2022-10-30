import { useReducer } from 'react';
import { Section, Statistics, Notification, FeedbackOptions } from 'components';

const initialValue = { good: 0, neutral: 0, bad: 0 };

function reducer(state, action) {
  console.log(action.type);
  return { ...state, [action.type]: state[action.type] + 1 };
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { good, neutral, bad } = state;

  const countTotalFeedback = () => {
    const values = Object.values(state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total, good);
  const options = Object.keys(state);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onClick={dispatch} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

