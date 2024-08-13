import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type FormDataTypes = {
	email: string;
	phone: string;
	personal: {
		name: string;
		gender: string;
		dob: string;
		nidSmartCard: string;
		nameFather: string;
		nameMother: string;
		nameSpouse: string;
	};
};

const initialState: FormDataTypes = {
	email: "",
	phone: "",
	personal: {
		name: "",
		gender: "",
		dob: "",
		nidSmartCard: "",
		nameFather: "",
		nameMother: "",
		nameSpouse: "",
	},
};

export const formDataSlice = createSlice({
	name: "formData",
	initialState,
	reducers: {
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setPhone: (state, action: PayloadAction<string>) => {
			state.phone = action.payload;
		},
		setName: (state, action: PayloadAction<string>) => {
			state.personal.name = action.payload;
		},
		setGender: (state, action: PayloadAction<string>) => {
			state.personal.gender = action.payload;
		},
		setDOB: (state, action: PayloadAction<string>) => {
			state.personal.dob = action.payload;
		},
		setNidSmartCard: (state, action: PayloadAction<string>) => {
			state.personal.nidSmartCard = action.payload;
		},
		setNameFather: (state, action: PayloadAction<string>) => {
			state.personal.nameFather = action.payload;
		},
		setNameMother: (state, action: PayloadAction<string>) => {
			state.personal.nameMother = action.payload;
		},
		setNameSpouse: (state, action: PayloadAction<string>) => {
			state.personal.nameSpouse = action.payload;
		},
	},
});

export const {
	setEmail,
	setPhone,
	setName,
	setGender,
	setDOB,
	setNidSmartCard,
	setNameFather,
	setNameMother,
	setNameSpouse,
} = formDataSlice.actions;
export default formDataSlice.reducer;
