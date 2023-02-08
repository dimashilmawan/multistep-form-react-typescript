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
			<label htmlFor={id} className="text-sm font-medium text-gray-600">
				{label}
			</label>
			<input
				id={id}
				required
				autoFocus={autoFocus}
				type={type}
				value={value}
				onChange={onChange}
				className="rounded-md bg-inherit px-2 py-1 text-gray-500 ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
			/>
		</div>
	);
};
export default Input;
