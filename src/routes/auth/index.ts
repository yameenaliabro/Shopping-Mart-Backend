import express from "express";
import register from "./register";
import login from "./login";
const authrouter = express()
    .use("/register", register)
    .use("/login", login)

export default authrouter