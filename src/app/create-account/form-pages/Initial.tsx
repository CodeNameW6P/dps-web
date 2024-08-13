import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setEmail, setPhone } from "@/redux/slices/formDataSlice";
import { setEmailError, setPhoneError } from "@/redux/slices/formErrorSlice";
import { nextPage } from "@/redux/slices/currentPageSlice";
import { createUser } from "@/actions/userActions";
import { useState } from "react";
import TextInput from "@/components/TextInput";

export default function Initial() {
	const email = useAppSelector((state) => state.formData.email);
	const phone = useAppSelector((state) => state.formData.phone);

	const emailError = useAppSelector((state) => state.formError.emailError);
	const phoneError = useAppSelector((state) => state.formError.phoneError);

	const dispatch = useAppDispatch();

	const [loadingState, setLoadingState] = useState({
		disabled: false,
		buttonText: "Next",
	});

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setEmail(event.target.value));
	};

	const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setPhone(event.target.value));
	};

	const validateEmail = (email: string) => {
		if (
			!email.trim().toLowerCase() ||
			email.trim().toLowerCase() === "" ||
			email.trim().toLowerCase() === null
		) {
			dispatch(setEmailError("Email can't be empty"));
			return false;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())) {
			dispatch(setEmailError("Please enter a valid email"));
			return false;
		} else {
			dispatch(setEmailError(""));
			return true;
		}
	};

	const validatePhone = (phone: string) => {
		if (!phone.trim() || phone.trim() === "" || phone.trim() === null) {
			dispatch(setPhoneError("Phone number can't be empty"));
			return false;
		} else if (!/^\d+$/.test(phone.trim())) {
			dispatch(setPhoneError("Please enter a valid phone number"));
			return false;
		} else {
			dispatch(setPhoneError(""));
			return true;
		}
	};

	const handleNext = async () => {
		if (validateEmail(email) && validatePhone(phone)) {
			setLoadingState((l) => ({
				...l,
				disabled: true,
				buttonText: "Loading...",
			}));
			const user = await createUser({
				email: email.trim().toLowerCase(),
				phone: phone.trim(),
			});
			if (user) {
				dispatch(nextPage());
			}
			setLoadingState((l) => ({
				...l,
				disabled: false,
				buttonText: "Next",
			}));
		}
	};

	return (
		<>
			<h1 className="font-semibold text-xl md:text-2xl">Enter credentials:</h1>
			<form className="flex flex-col grow gap-5 w-full md:w-2/3" action="" method="">
				<TextInput
					label="Email:"
					name="email"
					value={email}
					handleChange={handleEmailChange}
					error={emailError}
					type="email"
				/>
				<TextInput
					label="Phone number:"
					name="phone"
					value={phone}
					handleChange={handlePhoneChange}
					error={phoneError}
				/>
			</form>
			<div className="place-self-end">
				<button
					onClick={handleNext}
					disabled={loadingState.disabled}
					className="flex text-white justify-center items-center p-2 w-32 bg-green-500 rounded-md disabled:bg-green-300"
				>
					{loadingState.buttonText}
				</button>
			</div>
		</>
	);
}
