import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
	setPreferredAddress,
	setAccountNumber,
	setAccountPurpose,
	setPreferredBranch,
} from "@/redux/slices/formDataSlice";
import {
	setPreferredAddressError,
	setAccountNumberError,
	setAccountPurposeError,
	setPreferredBranchError,
} from "@/redux/slices/formErrorSlice";
import { nextPage, prevPage } from "@/redux/slices/currentPageSlice";
import { useState } from "react";
import { updateUser } from "@/actions/userActions";
import TextInput from "@/components/TextInput";

