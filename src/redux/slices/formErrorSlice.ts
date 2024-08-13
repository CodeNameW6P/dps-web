import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type FormErrorTypes = {
	emailError: string;
	phoneError: string;
};

const initialState: FormErrorTypes = {
	emailError: "",
	phoneError: "",
};

export const formErrorSlice = createSlice({
	name: "formError",
	initialState,
	reducers: {
		setEmailError: (state, action: PayloadAction<string>) => {
			state.emailError = action.payload;
		},
		setPhoneError: (state, action: PayloadAction<string>) => {
			state.phoneError = action.payload;
		},
	},
});

export const { setEmailError, setPhoneError } = formErrorSlice.actions;
export default formErrorSlice.reducer;
