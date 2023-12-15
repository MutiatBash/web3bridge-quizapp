export const PrimaryButton = ({ text, className, onClick, type, disabled }) => {
	return (
		<div>
			<button
				disabled={disabled}
				type={type}
				onClick={onClick}
				className={`gap-2 w-[fit-content] py-[0.8rem] bg-purple-700 px-2 whitespace-nowrap text-white rounded-lg font-semibold md:py-[0.6875rem] md:px-5 hover:shadow-md transition-all ease-in cursor-pointer ${className} ${
					disabled ? "bg-gray text-lightGray" : ""
				}`}
			>
				{text}
			</button>
		</div>
	);
};

export const SecondaryButton = ({ text, className, onClick, type, disabled }) => {
	return (
		<div>
			<button
				disabled={disabled}
				type={type}
				onClick={onClick}
				className={`gap-2 w-[fit-content] py-[0.8rem] bg-white text-purple-700 px-2 whitespace-nowrap border border-purple-700 rounded-lg font-semibold md:py-[0.6875rem] md:px-5 hover:shadow-md transition-all ease-in cursor-pointer ${className} ${
					disabled ? "bg-gray text-lightGray" : ""
				}`}
			>
				{text}
			</button>
		</div>
	);
};
