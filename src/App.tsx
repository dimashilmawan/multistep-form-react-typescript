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

{
	/* <div className="absolute top-1 right-1">
{currentStepIndex + 1} / {steps.length}
</div> */
}

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
		<div className="h-screen bg-gray-100 pt-20">
			{/* CARD */}
			<div className="relative mx-auto max-w-lg rounded-xl bg-white   py-4 px-8 shadow-lg">
				{/* FORM */}
				<form onSubmit={submitHandler} className=" ">
					{/* TITLE LABEL INPUT WRAPER  */}
					{step}

					{/* BUTTON WRAPPER */}
					<div className="mt-8 flex justify-end gap-3">
						{!isFirstStep && (
							<button
								onClick={back}
								type="button"
								className=" rounded-md px-2 py-1 font-medium text-gray-500  focus:outline-none focus:ring-2 focus:ring-emerald-600"
							>
								Back
							</button>
						)}
						<button
							type="submit"
							className="rounded-md bg-emerald-600 px-3 py-1  font-semibold text-white focus:scale-105 focus:bg-emerald-500 focus:outline-none"
						>
							{!isLastStep ? "Next" : "Finish"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
