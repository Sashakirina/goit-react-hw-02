function Feedback({ good, neutral, bad, totalFeedback, positivFeedback }) {
	return (
		<div>
			<p>Good: {good}</p>
			<p>Neutral: {neutral}</p>
			<p>Bad: {bad}</p>
			<p>Total: {totalFeedback}</p>
			<p>Positiv: {positivFeedback}%</p>
		</div>
	);
}

export default Feedback;
