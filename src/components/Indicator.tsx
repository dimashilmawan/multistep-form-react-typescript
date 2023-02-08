type IndicatorProps = {
	currentStepIndex: number;
};

const Indicator = ({ currentStepIndex }: IndicatorProps) => {
	console.log(currentStepIndex === 0);
	return (
		<div className="mx-auto flex w-5/6 items-center text-white">
			{/* <button
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
			</button> */}
			{/* 1111111111111111111 */}
			<div
				className={`relative grid h-[22px] w-[22px] place-items-center rounded-full text-xs font-bold ${
					currentStepIndex >= 0 ? "bg-emerald-500" : "bg-gray-300"
				}`}
			>
				1
				<span
					className={`absolute top-[26px] left-1/2 w-max -translate-x-1/2 text-[11px] font-medium uppercase ${
						currentStepIndex >= 0 ? "text-emerald-600" : "text-gray-700"
					}`}
				>
					user detail
				</span>
			</div>
			<span
				className={`block h-1 flex-1 ${
					currentStepIndex >= 1 ? "bg-emerald-300" : "bg-gray-300"
				}`}
			/>

			{/* 2222222222222222222222222 */}
			<div
				className={`relative grid h-[22px] w-[22px] place-items-center rounded-full text-xs font-bold ${
					currentStepIndex >= 1 ? "bg-emerald-500" : "bg-gray-300"
				}`}
			>
				2
				<span
					className={`absolute top-[26px] left-1/2 w-max -translate-x-1/2 text-[11px] font-medium uppercase ${
						currentStepIndex >= 1 ? "text-emerald-600" : "text-gray-500"
					}`}
				>
					address
				</span>
			</div>
			<span
				className={`block h-1 flex-1 ${
					currentStepIndex >= 2 ? "bg-emerald-300" : "bg-gray-300"
				}`}
			/>

			{/* 3333333333333333333 */}
			<div
				className={`relative grid h-[22px] w-[22px] place-items-center rounded-full text-xs font-bold ${
					currentStepIndex >= 2 ? "bg-emerald-500" : "bg-gray-300"
				}`}
			>
				2
				<span
					className={`absolute top-[26px] left-1/2 w-max -translate-x-1/2 text-[11px] font-medium uppercase ${
						currentStepIndex >= 2 ? "text-emerald-600" : "text-gray-500"
					}`}
				>
					account creation
				</span>
			</div>
		</div>
	);
};
export default Indicator;
