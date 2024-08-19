import mongoose from "mongoose";

const defaultProperties = {
	type: String,
	default: "",
};

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
		},
		personal: {
			name: defaultProperties,
			gender: defaultProperties,
			dob: defaultProperties,
			nidSmartCard: defaultProperties,
			nameFather: defaultProperties,
			nameMother: defaultProperties,
			nameSpouse: defaultProperties,
		},
		income: {
			occupation: defaultProperties,
			organization: defaultProperties,
			designation: defaultProperties,
			profession: defaultProperties,
			monthlyIncome: defaultProperties,
			etinNumber: defaultProperties,
		},
		presentAddress: {
			v_t_r_h_f: defaultProperties,
			s_up_b_o: defaultProperties,
			s_d: defaultProperties,
			c_d: defaultProperties,
			t_u: defaultProperties,
			postOffice: defaultProperties,
		},
		permanentAddress: {
			v_t_r_h_f: defaultProperties,
			s_up_b_o: defaultProperties,
			s_d: defaultProperties,
			c_d: defaultProperties,
			t_u: defaultProperties,
			postOffice: defaultProperties,
		},
		officeAddress: {
			v_t_r_h_f: defaultProperties,
			s_up_b_o: defaultProperties,
			s_d: defaultProperties,
			c_d: defaultProperties,
			t_u: defaultProperties,
			postOffice: defaultProperties,
		},
	},
	{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
