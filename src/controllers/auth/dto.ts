export type loginProps = {
    username: string;
    password: string;
}

export type registerprops = {
    username: string;
    email: string;
    password: string;
    phonNumber: number;
    dob: number;
}

export type UpdateUser = {
    _id: string;
    username: string;
    phoneNumber: number;
    dob: number;

}