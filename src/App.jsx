import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  // Calculate the total count of feedback
  const total = good + neutral + bad;

  // Calculate the average based on the scale (1 for good, 0 for neutral, -1 for bad)
  const average = (good - bad) / total || 0;

  // Calculate the percentage of positive feedback
  const positivePercentage = (good / total) * 100 || 0;

  return (
    <div>
      <h2>Feedback Statistics:</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
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
      <h1>Feedback App</h1>
      <div>
        <button onClick={() => handleFeedback("good")}>Good</button>
        <button onClick={() => handleFeedback("neutral")}>Neutral</button>
        <button onClick={() => handleFeedback("bad")}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
