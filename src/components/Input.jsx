import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FiLock } from "react-icons/fi";

const Input = () => {
	const [visible, setVisible] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [error, setError] = useState("");

	const handleChange = e => {
		setInputValue(e.target.value);

		if (inputValue.length < 5) {
			setError("Password must contain at least 6 characters");
		} else {
			setError("");
		}
	};

	const toggleVisibility = () => setVisible(!visible);

	return (
		<div className="w-full max-w-md mx-auto mt-12">
			<label className="block text-sm font-medium text-gray-700 mb-1">
				Password <span className="text-red-500">*</span>
			</label>
			<div
				className={`flex items-center border border-gray-300 rounded-xl bg-white px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-300  gap-3 focus-within:ring-2 ${
					error
						? "focus-within:ring-red-500"
						: " focus-within:ring-blue-400"
				}`}
			>
				<FiLock size={20} className="text-gray-400" />
				<input
					value={inputValue}
					type={visible ? "text" : "password"}
					placeholder="Enter your password"
					className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
					onChange={handleChange}
				/>

				<button
					type="button"
					onClick={toggleVisibility}
					className="text-gray-500 hover:text-green-500 transition-colors duration-200"
				>
					{visible ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
				</button>
			</div>
			<small className="text-red-500">{error}</small>
		</div>
	);
};

export default Input;
