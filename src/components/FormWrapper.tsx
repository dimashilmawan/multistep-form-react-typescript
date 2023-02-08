import { ReactNode } from "react";

type FormWrapperProps = {
	title: string;
	children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
	return (
		<div className="">
			<h2 className="text-center text-3xl font-bold text-gray-700">{title}</h2>
			{/* <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">{children}</div> */}
			<div className="mt-8 space-y-4">{children}</div>
		</div>
	);
};
export default FormWrapper;
