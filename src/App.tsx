import { FormEvent, useState } from "react";
import AccountForm from "./components/AccountForm";
import AddressForm from "./components/AddressForm";
import UserForm from "./components/UserForm";
import { useMultistepForm } from "./hooks/useMultistepForm";

type FormData = {
	firstName: string;
	lastName: string;
	age: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	email: string;
	password: string;
};

const INITIAL_DATA: FormData = {
	firstName: "",
	lastName: "",
	age: "",
	street: "",
	city: "",
	state: "",
	zip: "",
	email: "",
	password: "",
};

function App() {
	const [data, setData] = useState(INITIAL_DATA);

	const updateFields = (fields: Partial<FormData>) => {
		setData(prevData => ({ ...prevData, ...fields }));
	};

	const {
		step,
		steps,
		currentStepIndex,
		setCurrentStepIndex,
		isFirstStep,
		isLastStep,
		next,
		back,
	} = useMultistepForm([
		<UserForm {...data} updateFields={updateFields} />,
		<AddressForm {...data} updateFields={updateFields} />,
		<AccountForm {...data} updateFields={updateFields} />,
	]);

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (!isLastStep) return next();
		setData(INITIAL_DATA);
		setCurrentStepIndex(0);
		alert("Successfully submitted Form");
	};

	return (
		<div className="relative m-4 mx-auto max-w-lg rounded-lg border-2 border-emerald-800 bg-emerald-500 p-4">
			<form onSubmit={submitHandler}>
				<div className="absolute top-1 right-1">
					{currentStepIndex + 1} / {steps.length}
				</div>
				{step}
				<div className="mt-4 flex justify-end gap-2">
					{!isFirstStep && (
						<button onClick={back} type="button" className="bg-white px-2 py-1">
							Back
						</button>
					)}
					<button type="submit" className="bg-white px-2 py-1">
						{!isLastStep ? "Next" : "Finish"}
					</button>
				</div>
			</form>
		</div>
	);
}

export default App;
