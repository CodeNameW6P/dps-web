import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type FormErrorTypes = {
	emailError: string;
	phoneError: string;
	nameError: string;
	genderError: string;
	dobError: string;
	nidSmartCardError: string;
	nameFatherError: string;
	nameMotherError: string;
	nameSpouseError: string;
	occupationError: string;
	organizationError: string;
	designationError: string;
	professionError: string;
	monthlyIncomeError: string;
	etinNumberError: string;
	presentV_T_R_H_FError: string;
	presentS_UP_B_OError: string;
	presentS_DError: string;
	presentC_DError: string;
	presentT_UError: string;
	presentPostOfficeError: string;
	permanentV_T_R_H_FError: string;
	permanentS_UP_B_OError: string;
	permanentS_DError: string;
	permanentC_DError: string;
	permanentT_UError: string;
	permanentPostOfficeError: string;
	officeV_T_R_H_FError: string;
	officeS_UP_B_OError: string;
	officeS_DError: string;
	officeC_DError: string;
	officeT_UError: string;
	officePostOfficeError: string;
};

const initialState: FormErrorTypes = {
	emailError: "",
	phoneError: "",
	nameError: "",
	genderError: "",
	dobError: "",
	nidSmartCardError: "",
	nameFatherError: "",
	nameMotherError: "",
	nameSpouseError: "",
	occupationError: "",
	organizationError: "",
	designationError: "",
	professionError: "",
	monthlyIncomeError: "",
	etinNumberError: "",
	presentV_T_R_H_FError: "",
	presentS_UP_B_OError: "",
	presentS_DError: "",
	presentC_DError: "",
	presentT_UError: "",
	presentPostOfficeError: "",
	permanentV_T_R_H_FError: "",
	permanentS_UP_B_OError: "",
	permanentS_DError: "",
	permanentC_DError: "",
	permanentT_UError: "",
	permanentPostOfficeError: "",
	officeV_T_R_H_FError: "",
	officeS_UP_B_OError: "",
	officeS_DError: "",
	officeC_DError: "",
	officeT_UError: "",
	officePostOfficeError: "",
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
		setNameError: (state, action: PayloadAction<string>) => {
			state.nameError = action.payload;
		},
		setGenderError: (state, action: PayloadAction<string>) => {
			state.genderError = action.payload;
		},
		setDOBError: (state, action: PayloadAction<string>) => {
			state.dobError = action.payload;
		},
		setNIDSmartCardError: (state, action: PayloadAction<string>) => {
			state.nidSmartCardError = action.payload;
		},
		setNameFatherError: (state, action: PayloadAction<string>) => {
			state.nameFatherError = action.payload;
		},
		setNameMotherError: (state, action: PayloadAction<string>) => {
			state.nameMotherError = action.payload;
		},
		setNameSpouseError: (state, action: PayloadAction<string>) => {
			state.nameSpouseError = action.payload;
		},
		setOccupationError: (state, action: PayloadAction<string>) => {
			state.occupationError = action.payload;
		},
		setOrganizationError: (state, action: PayloadAction<string>) => {
			state.organizationError = action.payload;
		},
		setDesignationError: (state, action: PayloadAction<string>) => {
			state.designationError = action.payload;
		},
		setProfessionError: (state, action: PayloadAction<string>) => {
			state.professionError = action.payload;
		},
		setMonthlyIncomeError: (state, action: PayloadAction<string>) => {
			state.monthlyIncomeError = action.payload;
		},
		setETINNumberError: (state, action: PayloadAction<string>) => {
			state.etinNumberError = action.payload;
		},
		setPresentV_T_R_H_FError: (state, action: PayloadAction<string>) => {
			state.presentV_T_R_H_FError = action.payload;
		},
		setPresentS_UP_B_OError: (state, action: PayloadAction<string>) => {
			state.presentS_UP_B_OError = action.payload;
		},
		setPresentS_DError: (state, action: PayloadAction<string>) => {
			state.presentS_DError = action.payload;
		},
		setPresentC_DError: (state, action: PayloadAction<string>) => {
			state.presentC_DError = action.payload;
		},
		setPresentT_UError: (state, action: PayloadAction<string>) => {
			state.presentT_UError = action.payload;
		},
		setPresentPostOfficeError: (state, action: PayloadAction<string>) => {
			state.presentPostOfficeError = action.payload;
		},
		setPermanentV_T_R_H_FError: (state, action: PayloadAction<string>) => {
			state.permanentV_T_R_H_FError = action.payload;
		},
		setPermanentS_UP_B_OError: (state, action: PayloadAction<string>) => {
			state.permanentS_UP_B_OError = action.payload;
		},
		setPermanentS_DError: (state, action: PayloadAction<string>) => {
			state.permanentS_DError = action.payload;
		},
		setPermanentC_DError: (state, action: PayloadAction<string>) => {
			state.permanentC_DError = action.payload;
		},
		setPermanentT_UError: (state, action: PayloadAction<string>) => {
			state.permanentT_UError = action.payload;
		},
		setPermanentPostOfficeError: (state, action: PayloadAction<string>) => {
			state.permanentPostOfficeError = action.payload;
		},
		setOfficeV_T_R_H_FError: (state, action: PayloadAction<string>) => {
			state.officeV_T_R_H_FError = action.payload;
		},
		setOfficeS_UP_B_OError: (state, action: PayloadAction<string>) => {
			state.officeS_UP_B_OError = action.payload;
		},
		setOfficeS_DError: (state, action: PayloadAction<string>) => {
			state.officeS_DError = action.payload;
		},
		setOfficeC_DError: (state, action: PayloadAction<string>) => {
			state.officeC_DError = action.payload;
		},
		setOfficeT_UError: (state, action: PayloadAction<string>) => {
			state.officeT_UError = action.payload;
		},
		setOfficePostOfficeError: (state, action: PayloadAction<string>) => {
			state.officePostOfficeError = action.payload;
		},
	},
});

export const {
	setEmailError,
	setPhoneError,
	setNameError,
	setGenderError,
	setDOBError,
	setNIDSmartCardError,
	setNameFatherError,
	setNameMotherError,
	setNameSpouseError,
	setOccupationError,
	setOrganizationError,
	setDesignationError,
	setProfessionError,
	setMonthlyIncomeError,
	setETINNumberError,
	setPresentV_T_R_H_FError,
	setPresentS_UP_B_OError,
	setPresentS_DError,
	setPresentC_DError,
	setPresentT_UError,
	setPresentPostOfficeError,
	setPermanentV_T_R_H_FError,
	setPermanentS_UP_B_OError,
	setPermanentS_DError,
	setPermanentC_DError,
	setPermanentT_UError,
	setPermanentPostOfficeError,
	setOfficeV_T_R_H_FError,
	setOfficeS_UP_B_OError,
	setOfficeS_DError,
	setOfficeC_DError,
	setOfficeT_UError,
	setOfficePostOfficeError,
} = formErrorSlice.actions;
export default formErrorSlice.reducer;
