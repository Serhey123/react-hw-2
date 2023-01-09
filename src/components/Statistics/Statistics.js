function Statistics(props) {
  return (
    <ul>
      <li>good {props.good}</li>
      <li>neutral {props.neutral}</li>
      <li>bad {props.bad}</li>
      <li>total {props.total}</li>
      <li>Positive feedback {props.positivePercentage}</li>
    </ul>
  );
}

export default Statistics;
