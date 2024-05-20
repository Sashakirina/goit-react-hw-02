import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
	const [options, setOptions] = useState(() => {
		const savedOptions = window.localStorage.getItem("options");
		return savedOptions !== null ? JSON.parse(savedOptions) : 0;
	});

	const { good, neutral, bad } = options;
	const totalFeedback = good + neutral + bad;
	const positivFeedback = Math.round((good / totalFeedback) * 100);

	const updateFeedback = (feedbackType) => {
		setOptions({
			...options,
			[feedbackType]: options[feedbackType] + 1,
		});
		console.log(feedbackType);
	};

	const resetFeedbacks = () => {
		setOptions({
			good: 0,
			neutral: 0,
			bad: 0,
		});
	};

	useEffect(() => {
		window.localStorage.setItem(
			"options",
			JSON.stringify({ good, neutral, bad })
		);
	}, [good, neutral, bad]);

	return (
		<>
			<Description />
			<Options
				resetFeedbacks={resetFeedbacks}
				totalFeedback={totalFeedback}
				updateFeedback={updateFeedback}
			/>
			{totalFeedback ? (
				<Feedback
					good={options.good}
					neutral={options.neutral}
					bad={options.bad}
					totalFeedback={totalFeedback}
					positivFeedback={positivFeedback}
				/>
			) : (
				<Notification />
			)}
		</>
	);
}

export default App;
