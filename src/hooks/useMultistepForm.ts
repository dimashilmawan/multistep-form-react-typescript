import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	function next() {
		setCurrentStepIndex((prevIndex: number) => {
			if (prevIndex >= steps.length - 1) return prevIndex;
			return prevIndex + 1;
		});
	}
	function back() {
		setCurrentStepIndex((prevIndex: number) => {
			if (prevIndex <= 0) return prevIndex;
			return prevIndex - 1;
		});
	}

	return {
		currentStepIndex,
		setCurrentStepIndex,
		step: steps[currentStepIndex],
		next,
		back,
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length - 1,
	};
}
