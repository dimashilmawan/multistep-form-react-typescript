type IndicatorProps = {
	currentStepIndex: number;
	stepsLength: number;
};

const Indicator = ({ currentStepIndex, stepsLength }: IndicatorProps) => {
	console.log(currentStepIndex === 0);
	return (
		<div className="mx-auto flex w-5/6 items-center text-white">
			<button
				type="button"
				className={`relative h-6  w-6 cursor-default rounded-full text-xs font-bold ${
					currentStepIndex >= 0 ? "bg-emerald-500" : "bg-gray-300"
				}`}
			>
				1
				<span
					className={`absolute top-[26px] w-32 -translate-x-1/2 text-[11px] font-medium uppercase ${
						currentStepIndex >= 0 ? "text-emerald-600" : "text-gray-700"
					}`}
				>
					user detail
				</span>
			</button>
			<span
				className={`block h-1 flex-1 ${
					currentStepIndex >= 1 ? "bg-emerald-300" : "bg-gray-300"
				}`}
			/>
			<button
				type="button"
				className={`relative  h-6 w-6 cursor-default  rounded-full text-xs font-bold ${
					currentStepIndex >= 1 ? "bg-emerald-500" : "bg-gray-300"
				}`}
			>
				2
				<span
					className={`absolute top-[26px] w-32 -translate-x-1/2 text-[11px] font-medium uppercase ${
						currentStepIndex >= 0 ? "text-emerald-600" : "text-gray-700"
					}`}
				>
					address
				</span>
			</button>
			<span
				className={`block h-1 flex-1 ${
					currentStepIndex >= 2 ? "bg-emerald-300" : "bg-gray-300"
				}`}
			/>
			<button
				type="button"
				className={`relative h-6  w-6 cursor-default rounded-full text-xs font-bold ${
					currentStepIndex >= 2 ? "bg-emerald-500" : "bg-gray-300"
				}`}
			>
				3
				<span
					className={`absolute top-[26px] w-32 -translate-x-1/2 text-[11px] font-medium uppercase ${
						currentStepIndex >= 0 ? "text-emerald-600" : "text-gray-700"
					}`}
				>
					ACCOUNT CREATION
				</span>
			</button>
		</div>
	);
};
export default Indicator;
