function FeedbackOption(props) {
  return (
    <>
      <button
        data-btn="good"
        onClick={e => props.options(e.target.dataset.btn)}
      >
        good
      </button>
      <button
        data-btn="neutral"
        onClick={e => props.options(e.target.dataset.btn)}
      >
        neutral
      </button>
      <button data-btn="bad" onClick={e => props.options(e.target.dataset.btn)}>
        bad
      </button>
    </>
  );
}

export default FeedbackOption;
