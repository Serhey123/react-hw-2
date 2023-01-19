import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOption(props) {
  return (
    <div className={styles.wrapper}>
      <button
        data-btn="good"
        onClick={e => props.handleBtn(e.currentTarget.dataset.btn)}
      >
        Good
      </button>
      <button
        data-btn="neutral"
        onClick={e => props.handleBtn(e.currentTarget.dataset.btn)}
      >
        Neutral
      </button>
      <button
        data-btn="bad"
        onClick={e => props.handleBtn(e.currentTarget.dataset.btn)}
      >
        Bad
      </button>
    </div>
  );
}

export default FeedbackOption;

FeedbackOption.propTypes = {
  options: PropTypes.func,
};
