import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics(props) {
  return (
    <ul className={styles.list}>
      <li>Good: {props.good}</li>
      <li>Neutral: {props.neutral}</li>
      <li>Bad: {props.bad}</li>
      <li>Total: {props.total}</li>
      <li>Positive feedback: {props.positivePercentage}</li>
    </ul>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
