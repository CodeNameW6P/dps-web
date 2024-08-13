import mongoose from "mongoose";

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
			name: {
				type: String,
				default: "",
			},
			gender: {
				type: String,
				default: "",
			},
			dob: {
				type: String,
				default: "",
			},
			nidSmartCard: {
				type: String,
				default: "",
			},
			nameFather: {
				type: String,
				default: "",
			},
			nameMother: {
				type: String,
				default: "",
			},
			nameSpouse: {
				type: String,
				default: "",
			},
		},
	},
	{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
