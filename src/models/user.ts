import mongoose, { Schema } from "mongoose";
import { IUser } from "../types";

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: true },
    phoneNumber: { type: Number, unique: true },
    dob: { type: Number, unique: true },
    username: { type: String, }
})

export default  mongoose.model<IUser>("user", userSchema);