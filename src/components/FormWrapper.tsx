import { ReactNode } from "react";

type FormWrapperProps = {
	title: string;
	children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
	return (
		<>
			<h2 className="text-center text-2xl">{title}</h2>
			<div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">{children}</div>
		</>
	);
};
export default FormWrapper;
