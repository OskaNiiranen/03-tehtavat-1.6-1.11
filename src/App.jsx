import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  // Calculate the total count of feedback
  const total = good + neutral + bad;

  // Calculate the average based on the scale (1 for good, 0 for neutral, -1 for bad)
  const average = (good - bad) / total || 0;

  // Calculate the percentage of positive feedback
  const positivePercentage = (good / total) * 100 || 0;

  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine
            text="Positive Feedback Percentage"
            value={`${positivePercentage}%`}
          />
        </>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Function to handle feedback
  const handleFeedback = (type) => {
    if (type === "good") {
      setGood(good + 1);
    } else if (type === "neutral") {
      setNeutral(neutral + 1);
    } else if (type === "bad") {
      setBad(bad + 1);
    }
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button onClick={() => handleFeedback("good")} text="Good" />
        <Button onClick={() => handleFeedback("neutral")} text="Neutral" />
        <Button onClick={() => handleFeedback("bad")} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
