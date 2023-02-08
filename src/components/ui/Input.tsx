import { ChangeEvent } from "react";

type InputProps = {
	autoFocus?: boolean;
	label: string;
	type?: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
	autoFocus = false,
	label,
	type = "text",
	value,
	onChange,
}: InputProps) => {
	const id = label.split(" ").join("");
	return (
		<div className="flex flex-col gap-2">
			<label
				htmlFor={id}
				className="text-sm text-gray-700"
			>{`Please enter your ${label}`}</label>
			<input
				id={id}
				required
				autoFocus={autoFocus}
				type={type}
				value={value}
				onChange={onChange}
				className="rounded-md bg-inherit px-2 py-2 ring-2 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
			/>
		</div>
	);
};
export default Input;
