import { ApiError } from "../../helpers";
import { IUser } from "../../models";
import bcrypt from "bcrypt"
import { generateToken } from "../../utils";
import { UpdateUser, loginProps, registerprops } from "./dto";

export const register = async (props: registerprops) => {
    const { dob, email, password, phonNumber, username } = props
    const existinUser = await IUser.findOne({ email })
    if (existinUser) {
        throw new ApiError(401, "Email already exist!")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new IUser({ email, dob, password, phonNumber, username })
    const user = await newUser.save();

    if (!user) {
        throw new ApiError(401, "User Registration Failed")
    }
    const token = generateToken(user.id)
    return { token, user }
}

export const login = async (props: loginProps) => {
    const { password, username } = props
    const user = await IUser.findOne({ username })
    if (!user) {
        throw new ApiError(401, "User not Found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        throw new ApiError(401, "Password inValid");
    }

    const token = generateToken(user._id)
    return { user, token }
}

export const updateUser = async (props: UpdateUser) => {
    const { _id, dob, phoneNumber, username } = props
    
}

