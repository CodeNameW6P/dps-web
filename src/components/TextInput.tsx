type TextInputTypes = {
	name: string;
	label: string;
	type?: string;
	value?: string;
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	error?: string;
	hint?: string;
};

const TextInput: React.FC<TextInputTypes> = ({
	name,
	label,
	type = "text",
	value,
	handleChange,
	disabled = false,
	error,
	hint,
}) => {
	return (
		<>
			<div className="flex flex-col md:text-lg">
				<label htmlFor={name}>{label}</label>
				<input
					className="text-gray-500 focus:outline-none"
					type={type}
					name={name}
					id={name}
					value={value}
					onChange={handleChange}
					disabled={disabled}
				/>
				<div className="flex">
					<hr className="border-2 w-1/4 border-red-500" />
					<hr className="border-2 w-3/4 border-green-500" />
				</div>
				<span className="text-red-500">{error}</span>
				<span className="text-gray-500">{hint}</span>
			</div>
		</>
	);
};

export default TextInput;
